
function hideAllSections() {
  document.querySelectorAll("main section").forEach(section => {
    section.style.display = "none";
  });
}

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    hideAllSections();
    const targetSection = document.querySelector(link.getAttribute("href"));
    if (targetSection) {
      targetSection.style.display = "block";
    }
  });
});


const btnTop = document.getElementById("btn-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    btnTop.classList.add("show");
  } else {
    btnTop.classList.remove("show");
  }
});

btnTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const products = [
  { name: "Хидратиращ крем", price: 25 },
  { name: "Червило", price: 18 },
  { name: "Парфюм", price: 90 },
  { name: "Шампоан", price: 15 },
  { name: "Маска за лице", price: 22 }
];

const productsDiv = document.getElementById("products");
const cartDiv = document.getElementById("cart");
const totalSpan = document.getElementById("total");

let cart = [];
let total = 0;


products.forEach(product => {
  const div = document.createElement("div");
  div.innerHTML = `
    <span>${product.name} - ${product.price} лв.</span>
    <button class="add-btn">Добави</button>
  `;

  div.querySelector(".add-btn").addEventListener("click", () => {
    cart.push(product);
    renderCart();
  });

  productsDiv.appendChild(div);
});


function renderCart() {
  cartDiv.innerHTML = "";
  total = 0;

  if (cart.length === 0) {
    cartDiv.innerHTML = "<p>Няма добавени продукти</p>";
  }

  cart.forEach((item, index) => {
    total += item.price;

    const p = document.createElement("p");
    p.innerHTML = `
      ${item.name} - ${item.price} лв.
      <button class="remove-btn">❌</button>
    `;

    p.querySelector(".remove-btn").addEventListener("click", () => {
      cart.splice(index, 1);
      renderCart();
    });

    cartDiv.appendChild(p);
  });

  totalSpan.textContent = total;
}

