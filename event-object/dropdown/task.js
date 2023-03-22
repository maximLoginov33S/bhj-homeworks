const dropdownValue = document.querySelectorAll('.dropdown__value');// т.к. в п.3 задания сказанно, что элементов может быть много, получаем все элементы с классом "dropdown__value" в "массив"
const dropdownlist = document.querySelectorAll('.dropdown__list'); // такая же херня что и выше
const dropdownItemAll = document.querySelectorAll('.dropdown__item');

dropdownValue.forEach((itemValue, indexValue) => {  // т.к. в переменной у нас теперь массив, и мы пименили "querySelectorAll", мы можем перебрать его с помощью "forEach"

	itemValue.onclick = function () { // получив элемент из "массива" в "itemValue", вешаем на него прослушку ".onclick = function () {}"
		//-----от сюда-----//
		dropdownItemAll.forEach(item => item.onclick = null); // грохаем прослушку со всех элементов с классом "dropdown__item"
		
		dropdownlist.forEach(item => item.classList.remove('dropdown__list_active')); //перед тем, как открыть меню, пробежимся по всем элементам полученным в "массив" "dropdownlist", и удалим класс "dropdown__list_active"
		
		dropdownlist[indexValue].classList.add('dropdown__list_active'); //т.к. строкой выше, удалив класс, мы точно знаем, что у нас нет открытых меню, мы можем спокойно открывать меню по индексу из "массива" "dropdownlist[indexValue]" добавив ему класс
		
		const dropdownItem = dropdownlist[indexValue].querySelectorAll('.dropdown__item'); //т.к. нам нужны потомки определённого родителя, а его (родителя) мы получаем с помощью "dropdownlist[indexValue]", константу будем создавать именно в цикле "forEach"
		
		dropdownItem.forEach(itemItem => { // сдесь будем перебирать всех потомков
			itemItem.onclick = function () { // вешать на них прослушку
				dropdownValue[indexValue].textContent = itemItem.textContent; // читать с помошью "itemItem.textContent" что у них там написанно, и сразу записывать это в "dropdownValue[indexValue].textContent" который мы получили по индексу из самого первого "forEach"
				dropdownlist[indexValue].classList.remove('dropdown__list_active'); // закрываем наш список
				dropdownItem.forEach(item => item.onclick = null); // грохаем прослушку с потомков этого элемента
				return false; // убираем работу по умолчанию у ссылки 
			}
		});
		//-----и до сюда, это всё одно событие которое произойдёт при одном нажатии кнопки мыши-----//
	}
});

/*Алгоритм:
1. Получаем массивы по классам и записываем их в константы "dropdownValue", "dropdownlist"
2. Перебираем массив самого главного родителя "dropdownValue", получая в "itemValue" = элемент, в "indexValue" = его место в массиве (индекс)
3. Вешаем прослушку клик, на все элемены "dropdownValue"
4. При клике: 
	а. перебирая "dropdownlist" стераем у всех его элементов массива класс "dropdown__list_active", тем самым закрывая открытые меню
	б. по индексу "indexValue" находим в массиве "dropdownlist" нужный элемент и добовляем ему класс "dropdown__list_active", тем самым открывая меню
	в. всё так же по индексу "indexValue" получим всех потомков с классом "dropdown__item" у "dropdownlist[indexValue]" элемента и пишем их в константу "dropdownItem"
	г. перебираем потомков, и вешаем на них прослушку
	ну и т.д. смотри коменты.
*/

