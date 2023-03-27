const reveal = document.querySelectorAll('.reveal');

document.addEventListener('scroll', () => {

	reveal.forEach(item => {

		let {top, bottom} = item.getBoundingClientRect();

		if (top < window.innerHeight && bottom > 0) {
			item.classList.add('reveal_active');
		} else {
			item.classList.remove('reveal_active');
		};
	});
});
