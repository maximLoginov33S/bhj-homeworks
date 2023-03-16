const menuLink = document.getElementsByClassName('menu__link');
const menuItem = document.getElementsByClassName('menu__item');
const menuMain = document.getElementsByClassName('menu_main');

for (let i = 0; i < menuLink.length; i++) {
	
	let menuSub = menuItem[i].querySelector('.menu_sub');
	
	if (menuSub !== null) {
		
		menuLink[i].onclick = function () {
			
			if (menuSub.className == 'menu menu_sub') {

				for (let i = 0; i < menuMain.length; i++) {

					let pr = menuMain[i].querySelector('.menu_active');

					if (pr !== null) {
						pr.className = 'menu menu_sub';
					}

				}

				menuSub.className = 'menu menu_sub menu_active';
				return false;

			} else {
				menuSub.className = 'menu menu_sub';
				return false;
			}
		}
	}
}
