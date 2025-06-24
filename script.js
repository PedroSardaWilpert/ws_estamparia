js
// Inicialização
const cart = JSON.parse(localStorage.getItem('ws_cart')) || [];
updateCartCount();

function persistCart() {
  localStorage.setItem('ws_cart', JSON.stringify(cart));
}

function updateCartCount() {
  const count = cart.reduce((sum, i) => sum + i.qty, 0);
  document.getElementById('cart-count').textContent = count;
  persistCart();
}
// Chame updateCartCount()/renderCart() ao adicionar/remover itens