const tab = document.querySelectorAll('.tab');
const tabContent = document.querySelectorAll('.tab__content');

tab.forEach((itemTab, index) => itemTab.onclick = function () {
	tab.forEach(item => item.classList.remove('tab_active'));
	itemTab.classList.add('tab_active');

	tabContent.forEach(item => item.classList.remove('tab__content_active'));
	tabContent[index].classList.add('tab__content_active');
});