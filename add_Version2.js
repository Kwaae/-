document.getElementById('add-product-form').addEventListener('submit', async function(e) {
  e.preventDefault();
  const adminPass = document.getElementById('adminPass').value;
  if (adminPass !== "foxsteam123") {
    document.getElementById('msg').textContent = "كلمة المرور غير صحيحة!";
    return;
  }
  document.getElementById('msg').textContent = "لا يمكنك الإضافة مباشرة: عدل ملف products.json وضع الحساب فيه ثم ارفع الموقع من جديد!";

  const newProduct = {
    id: "acc" + Math.floor(Math.random() * 1000000),
    name: document.getElementById('accountName').value,
    desc: document.getElementById('desc').value,
    price: document.getElementById('price').value,
    img: document.getElementById('img').value,
    steamUser: document.getElementById('steamUser').value,
    steamPass: document.getElementById('steamPass').value
  };

  navigator.clipboard.writeText(JSON.stringify(newProduct, null, 2));
});