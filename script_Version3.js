async function loadProducts() {
  const res = await fetch('products.json');
  const products = await res.json();
  const container = document.getElementById('products-list');
  container.innerHTML = '';

  products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';

    card.innerHTML = `
      <img src="${product.img || 'https://cdn-icons-png.flaticon.com/512/5968/5968703.png'}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.desc}</p>
      <div class="price">${product.price}</div>
      <a href="account.html?id=${product.id}">عرض الحساب</a>
    `;

    container.appendChild(card);
  });
}
document.addEventListener('DOMContentLoaded', loadProducts);