const bookControlFontSize = document.querySelector('.book__control_font-size');
const bookContent = document.querySelector('.book__content');


bookControlFontSize.addEventListener('click', function (event) {

	const targetClassList = event.target.classList;
	event.preventDefault();

	bookContent.classList.remove('book_fs-big');
	bookContent.classList.remove('book_fs-small');
	
	for (let i = 0; i < this.children.length; i++) {
		this.children[i].classList.remove('font-size_active');
	};
	
	if (targetClassList.contains('font-size_small') == true) {
		targetClassList.add('font-size_active');
		bookContent.classList.add('book_fs-small');
		return;
	};
	
	if (targetClassList.contains('font-size_big') == true) {
		targetClassList.add('font-size_active');
		bookContent.classList.add('book_fs-big');
		return;
	};
	
	targetClassList.add('font-size_active');
	});

//---------- цвет шрифта ----------\\
const bookControlColor = document.querySelector('.book__control_color');

bookControlColor.addEventListener('click', function (event) {

	const targetClassList = event.target.classList;

	event.preventDefault();

	bookContent.classList.remove('book_color-black');
	bookContent.classList.remove('book_color-gray');
	bookContent.classList.remove('book_color-whitesmoke');

	for (let i = 0; i < this.children.length; i++) {
		this.children[i].classList.remove('color_active');
	};

	if (targetClassList.contains('text_color_black') == true) {
		targetClassList.add('color_active');
		bookContent.classList.add('book_color-black');
		return;
	};

	if (targetClassList.contains('text_color_gray') == true) {
		targetClassList.add('color_active');
		bookContent.classList.add('book_color-gray');
		return;
	};

	if (targetClassList.contains('text_color_whitesmoke') == true) {
		targetClassList.add('color_active');
		bookContent.classList.add('book_color-whitesmoke');
		return;
	};

});

//---------- цвет фона ----------\\

const bookControlBackground = document.querySelector('.book__control_background');

bookControlBackground.addEventListener('click', function (event) {

	const targetClassList = event.target.classList;

	event.preventDefault();

	bookContent.classList.remove('book_bg-black');
	bookContent.classList.remove('book_bg-gray');
	bookContent.classList.remove('book_bg-white');

	for (let i = 0; i < this.children.length; i++) {
		this.children[i].classList.remove('color_active');
	};

	if (targetClassList.contains('bg_color_black') == true) {
		targetClassList.add('color_active');
		bookContent.classList.add('book_bg-black');
		return;
	};

	if (targetClassList.contains('bg_color_gray') == true) {
		targetClassList.add('color_active');
		bookContent.classList.add('book_bg-gray');
		return;
	};

	if (targetClassList.contains('bg_color_white') == true) {
		targetClassList.add('color_active');
		bookContent.classList.add('book_bg-white');
		return;
	};

});