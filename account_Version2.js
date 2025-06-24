async function showAccount() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');
  if (!id) {
    document.getElementById('account-details').innerHTML = "<p>الحساب غير موجود!</p>";
    return;
  }
  const res = await fetch('products.json');
  const products = await res.json();
  const acc = products.find(p => p.id === id);
  if (!acc) {
    document.getElementById('account-details').innerHTML = "<p>الحساب غير موجود!</p>";
    return;
  }
  document.getElementById('account-details').innerHTML = `
    <div class="product-card" style="max-width:350px;margin:auto;">
      <img src="${acc.img || 'https://cdn-icons-png.flaticon.com/512/5968/5968703.png'}" alt="${acc.name}">
      <h3>${acc.name}</h3>
      <p>${acc.desc}</p>
      <div class="price">${acc.price}</div>
      <hr>
      <b>بيانات الحساب:</b>
      <p>اسم المستخدم: <span style="direction:ltr">${acc.steamUser}</span></p>
      <p>كلمة المرور: <span style="direction:ltr">${acc.steamPass}</span></p>
      <small>يرجى تغيير بيانات الحساب بعد الاستلام!</small>
    </div>
  `;
}
document.addEventListener('DOMContentLoaded', showAccount);