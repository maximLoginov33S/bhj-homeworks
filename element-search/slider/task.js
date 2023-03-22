const sliderImage = document.querySelectorAll('.slider__item');
const sliderBot = document.querySelectorAll('.slider__dot');

sliderImage.forEach((item, index) => {
	
	if (item.classList.contains('slider__item_active')) {
		sliderBot[index].classList.add('slider__dot_active');
	}
	
});

const sliderArrowPrev = document.querySelector('.slider__arrow_prev');

sliderArrowPrev.onclick = function () {

	let pr = sliderQuerySelectorAll();

	sliderImage[pr].className = 'slider__item';
	sliderBot[pr].classList.remove('slider__dot_active');

	if (pr <= 0) {
		pr = sliderImage.length;
	}

	sliderImage[pr - 1].className = 'slider__item slider__item_active';
	sliderBot[pr - 1].classList.add('slider__dot_active');
	
}

const sliderArrowNext = document.querySelector('.slider__arrow_next');

sliderArrowNext.onclick = function () {

	let pr = sliderQuerySelectorAll();

	sliderImage[pr].className = 'slider__item'; //можно переприсвоить class через "className = 'class'" 
	sliderBot[pr].classList.remove('slider__dot_active'); // а можно просто удалить его через "classList.remove('class')"

	if (pr >= sliderImage.length - 1) {
		pr = -1;
	}

	sliderImage[pr + 1].className = 'slider__item slider__item_active'; //если мы добовляем к класу ещё один, то через "className" мы пишем новый класс полностью (старый класс + новый)
	sliderBot[pr + 1].classList.add('slider__dot_active'); // через classList.add можно просто к уже сушествующим добавить новый класс.

}

function sliderQuerySelectorAll() {

	for (let i = 0; i < sliderImage.length; i++) {

		if (sliderImage[i].classList.contains('slider__item_active') === true) {
			return i;
		}

	}
}

sliderBot.forEach((item, index) => {

	item.onclick = function () {

		for (let i = 0; i < sliderBot.length; i++) {
			sliderImage[i].classList.remove('slider__item_active');
			sliderBot[i].classList.remove('slider__dot_active');
		}

		sliderImage[index].classList.add('slider__item_active');
		sliderBot[index].classList.add('slider__dot_active');
	}
});


//=====красяво, но счётчик всегда начинается с 0, доделать как нибудь=====\\
// const slides = Array.from(document.querySelectorAll(".slider__item"));
// const prev = document.querySelector(".slider__arrow_prev");
// const next = document.querySelector(".slider__arrow_next");

// let index = 0;

// next.onclick = function() {
//     index++;
//     for (let slide of slides) {
//         slide.className = "slider__item";
//     }
//     if (index >= slides.length) {
//         index = 0;
//     }
//     slides[index].classList.toggle("slider__item_active");
// };

// prev.onclick = function() {
//     index--;
//     for (let slide of slides) {
//         slide.className = "slider__item";
//     }
//     if (index < 0) {
//         index = slides.length - 1;
//     }
//     slides[index].classList.toggle("slider__item_active");
// };
