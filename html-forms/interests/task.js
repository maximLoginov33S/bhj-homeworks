let interestCheck = document.querySelectorAll('.interest__check');

interestCheck.forEach(item => {

	item.addEventListener('click', () => {
	
		if (item.closest('.interests_active') == null) {

			item.parentElement.nextElementSibling.querySelectorAll('input').forEach(el => {

				if (item.checked) {
					el.checked = true
				} else {
					el.checked = false
				};

			});

		};

	});

});