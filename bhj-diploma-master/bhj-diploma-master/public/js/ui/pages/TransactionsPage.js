/**
 * Класс TransactionsPage управляет
 * страницей отображения доходов и
 * расходов конкретного счёта
 * */
class TransactionsPage {
  /**
   * Если переданный элемент не существует,
   * необходимо выкинуть ошибку.
   * Сохраняет переданный элемент и регистрирует события
   * через registerEvents()
   * */
  constructor( element ) {
    if (!element) {
      throw new Error('Ошибка! Элемент не существует!');
    };

    this.element = element;
    this.registerEvents();
  }

  /**
   * Вызывает метод render для отрисовки страницы
   * */
  update() {
    this.render(this.lastOptions);
  }

  /**
   * Отслеживает нажатие на кнопку удаления транзакции
   * и удаления самого счёта. Внутри обработчика пользуйтесь
   * методами TransactionsPage.removeTransaction и
   * TransactionsPage.removeAccount соответственно
   * */
  registerEvents() {
    this.element.addEventListener('click', (event) => {
      const removeAccountBtn = event.target.closest('.remove-account');
      const transactionRemoveBtn = event.target.closest('.transaction__remove');
      if (removeAccountBtn) {
        event.preventDefault();
        this.removeAccount(); 
      }
      if (transactionRemoveBtn) {
        event.preventDefault();
        this.removeTransaction(transactionRemoveBtn.dataset.id);
      }
    });
  }

  /**
   * Удаляет счёт. Необходимо показать диаголовое окно (с помощью confirm())
   * Если пользователь согласен удалить счёт, вызовите
   * Account.remove, а также TransactionsPage.clear с
   * пустыми данными для того, чтобы очистить страницу.
   * По успешному удалению необходимо вызвать метод App.updateWidgets() и App.updateForms(),
   * либо обновляйте только виджет со счетами и формы создания дохода и расхода
   * для обновления приложения
   * */
  removeAccount() {
    if (this.lastOptions) {
      const resultConfirm = confirm(`Вы действительно хотите удалить счет?`);
      if (resultConfirm) {
        const accountData = {id : this.lastOptions.account_id};
        Account.remove(accountData, (err, response) => {
          if (response && response.success) {
            App.update();
          }
        });
        this.clear();
      };
    }
  }

  /**
   * Удаляет транзакцию (доход или расход). Требует
   * подтверждеия действия (с помощью confirm()).
   * По удалению транзакции вызовите метод App.update(),
   * либо обновляйте текущую страницу (метод update) и виджет со счетами
   * */
  removeTransaction( id ) {
    const resultConfirm = confirm(`Вы действительно хотите удалить эту транзакцию?`);
    if (resultConfirm) {
      const transactionData = {id};
      Transaction.remove(transactionData, (err, response) => {
        if (response && response.success) {
          this.update();
          App.widgets.accounts.update();
        };
      });     
    };
  }

  /**
   * С помощью Account.get() получает название счёта и отображает
   * его через TransactionsPage.renderTitle.
   * Получает список Transaction.list и полученные данные передаёт
   * в TransactionsPage.renderTransactions()
   * */
  render(options){
    if (options) {
      this.lastOptions = options;

      Account.get(options.account_id, (err, response) => {
        if (response && response.success) {
          this.renderTitle(response.data.name);
        };
      }); 

      Transaction.list(options, (err, response) => {
        if (response && response.success) {
          this.renderTransactions(response.data);     
        };
      }); 
    }
  }

  /**
   * Очищает страницу. Вызывает
   * TransactionsPage.renderTransactions() с пустым массивом.
   * Устанавливает заголовок: «Название счёта»
   * */
  clear() {
    this.renderTransactions([]);
    this.renderTitle('Название счёта');
    this.lastOptions = null;
  }

  /**
   * Устанавливает заголовок в элемент .content-title
   * */
  renderTitle(name){
    const contentTitle = this.element.querySelector('.content-title');
    contentTitle.textContent = name; 
  }

  /**
   * Форматирует дату в формате 2019-03-10 03:20:41 (строка)
   * в формат «10 марта 2019 г. в 03:20»
   * */
  formatDate(date){
    const newDate = new Date(date);
    const formated = Intl.DateTimeFormat('ru-Ru', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
    const time = newDate.toLocaleTimeString('ru-Ru', {
      hour: '2-digit',
      minute: '2-digit',
    });
    return `${formated.format(newDate)} в ${time}`
  }

  /**
   * Формирует HTML-код транзакции (дохода или расхода).
   * item - объект с информацией о транзакции
   * */
  getTransactionHTML(item){
    return `
    <div class="transaction transaction_${item.type} row">
        <div class="col-md-7 transaction__details">
          <div class="transaction__icon">
              <span class="fa fa-money fa-2x"></span>
          </div>
          <div class="transaction__info">
              <h4 class="transaction__title">${item.name}</h4>
              <!-- дата -->
              <div class="transaction__date">${this.formatDate(item.created_at)}</div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="transaction__summ">
          <!--  сумма -->
          ${item.sum} <span class="currency">₽</span>
          </div>
        </div>
        <div class="col-md-2 transaction__controls">
            <!-- в data-id нужно поместить id -->
            <button class="btn btn-danger transaction__remove" data-id="${item.id}">
                <i class="fa fa-trash"></i>  
            </button>
        </div>
    </div>`
  }

  /**
   * Отрисовывает список транзакций на странице
   * используя getTransactionHTML
   * */
  renderTransactions(data){
    let resultHTML = '';
    data.forEach(item => {
      resultHTML += this.getTransactionHTML(item);
    });
    this.element.querySelector('.content').innerHTML = resultHTML; 
  }
}