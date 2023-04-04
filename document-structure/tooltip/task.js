window.document.body.addEventListener('click', function (event) { // вешаем прослушку на весь "body"

	let eventTarget = event.target; // т.к. будем часто работать с "target", сократим чюток написание
	const tooltip = document.querySelector('.tooltip'); // при клике будем искать в документе активную подсказку

	if (eventTarget.classList.contains('has-tooltip') == true && eventTarget.firstElementChild == null) { // условие сработает: если кликнули на элемнте с классом "has-tooltip" и при этом у этого элемента нет потомков (подсказки)

		event.preventDefault(); // отключаем работу ссылки по умолчанию

		if (tooltip) { // здесь мы проверяем была ли во всём документе найдена подсказка
			tooltip.remove(); // и если да то грохаем её
		};
			// eventTarget.getBoundingClientRect() вот эта хрень получает не много не те координаты которые нужны, из за чего при прокрутке подсказки появляются не там!!!
		let { offsetLeft, offsetTop, offsetHeight, offsetWidth } = eventTarget; // получаем координаты элемента на который кликнули
		let dataTooltipPosition = eventTarget.dataset.tooltipPosition; // получаем значение "dataset" у этого элемента
	
		event.target.innerHTML += ` 
		<div class="tooltip tooltip_active" style="left: ${offsetLeft}px">${eventTarget.title}</div>
		`; // после элемента на который кликнули (становится родителем), создаём новый элемент (подсказку), который становится предком, с начальным положением элемента равному левому краю родителя (style="left: ${offsetLeft}px"), иначе при дальнейшем получении координат подсказки, может получиться так, что подсказка в нулевой точке помещается в одну строку, а при перемещении её к родителю она полностью не влезет и перенесётся на ещё одну строку, тем самым можно получить неверную высоту элемента подсказки!!!
		
		let childHeight = eventTarget.firstElementChild.offsetHeight; // получаем высоту подсказки
		let childWidth = eventTarget.firstElementChild.offsetWidth; // ширину подсказки
		let styles; // заводим новую переменную в которую запишем нужный стиль после "фильтра"

		if (dataTooltipPosition == 'left') { // фильтр по полученному "data-tooltip-position="left""
			styles = `left: ${offsetLeft + offsetWidth}px; top: ${offsetTop}px`;

		} else if (dataTooltipPosition == 'right') {
			styles = `left: ${offsetLeft - childWidth}px; top: ${offsetTop}px`;

		} else if (dataTooltipPosition == 'top') {
			styles = `left: ${offsetLeft}px; top: ${offsetTop - childHeight}px`;

		} else {
			styles = `left: ${offsetLeft}px; top: ${offsetTop + offsetHeight}px`; // если "data-tooltip-position" отсутствует или не верно заданы параметры "left, right, top", будем выводить подсказку снизу.
		};

		eventTarget.firstElementChild.setAttribute('style', styles); // переписываем стиль у нашей подсказки

	} else { //это условие сработает при любом клике на всём документе!!! Отключив ссылку на Нетологию =))) (!!!не вешать прослушку на бодик, без надобности!!!)
		event.preventDefault(); // отключит действие ссылки по умолчанию
		if (tooltip) { // то же что и выше, если есть такой элемент (подсказка) 
			tooltip.remove(); // и просто уберём её с экрана
		};
	};
});