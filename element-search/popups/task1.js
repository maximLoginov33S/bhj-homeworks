const modalWindowAfter = document.getElementById('modal_main');
modalWindowAfter.className = 'modal modal_active';

const modalClose = document.getElementsByClassName('modal__close');
const modalWindowBefore = document.getElementById('modal_success');

for (let i = 0; i < modalClose.length; i++) {

	modalClose[i].onclick = function () {

		modalWindowAfter.className = 'modal';

		if (modalClose[i].classList.contains('show-success') == true) {
			modalWindowBefore.className = 'modal modal_active';
		}

		if (modalClose[i].classList.contains('modal__close_times') == true) {
			modalWindowBefore.className = 'modal';
		}
	}
}

