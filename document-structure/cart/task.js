const container = document.querySelector('.cart__products');
const quantityButton = document.querySelectorAll('.product__quantity-control');
const addButton = document.querySelectorAll('.product__add');

quantityButton.forEach(item => {
	item.addEventListener('click', (event) => {
		let value = event.target.parentNode.querySelector('.product__quantity-value');
		let count = +value.innerText;
		if (event.target.classList.contains('product__quantity-control_inc')) {
			count++;
			value.innerText = count;
		} else {
			if (count > 1) {
				count--;
				value.innerText = count;
			} else {
				value.innerText = 1;
			}
		};
	});
});

addButton.forEach(item => {
	item.addEventListener('click', () => {

		const product = item.closest('.product');
		const id = product.dataset.id;
		const productImg = product.querySelector('img').src;
		const countFromProduct = product.querySelector('.product__quantity-value');

		const cartProducts = Array.from(container.getElementsByClassName('cart__product'));

		const productInCart = cartProducts.find(item => item.dataset.id === id);

		if (productInCart) {
			const productInCartCount = productInCart.querySelector('.cart__product-count');
			productInCartCount.textContent = +countFromProduct.textContent + +productInCartCount.textContent;
		} else {
			container.insertAdjacentHTML('beforeEnd', `
				<div class="cart__product" data-id="${id}">
            	<img class="cart__product-image" src="${productImg}">
            	<div class="cart__product-count">${countFromProduct.textContent}</div>
            </div>`);
		};
	});
});
