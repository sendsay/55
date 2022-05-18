const cart = () => {
  const cartBtn = document.querySelector('#cart');
  const cartModal = document.querySelector('.cart');
  const cartClose = cartModal.querySelector('.cart-close');

  const openCart = () => {
    cartModal.style.display = 'flex';
  }

  const closeCart = () => {
    cartModal.style.display = 'none';
  }

  cartBtn.addEventListener('click', openCart);
  cartClose.addEventListener('click', closeCart);
}

export default cart;




