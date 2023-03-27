const card = document.querySelectorAll('.card');

card.forEach(item => {

	let rotatorCase = item.querySelectorAll('.rotator__case');
	rotatorCase.forEach((item, index) => {

		if (item.classList.contains('rotator__case_active') === true) {
			let firstSpeed = item.dataset.speed;
			let timeIndex = index;
			item.style.color = item.dataset.color;

			setTimeout(function run() {
				rotatorCase.forEach(item => item.classList.remove('rotator__case_active')); 
				
				if (timeIndex >= rotatorCase.length - 1) {
					timeIndex = 0;
				} else {
					++timeIndex;
				};
				
				rotatorCase[timeIndex].classList.add('rotator__case_active');
				rotatorCase[timeIndex].style.color = rotatorCase[timeIndex].dataset.color;
				speed = rotatorCase[timeIndex].dataset.speed;
				
				setTimeout(run, speed);

			}, firstSpeed);
		};
	});
});
