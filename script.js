
const gameImages = document.querySelectorAll('.game-image');

gameImages.forEach(img => {
    img.addEventListener('click', () => {
        const url = img.getAttribute('data-url');
        if (url) {
            window.open(url, '_blank');
        }
    });
});

function toggleDropdown() {
    document.getElementById("filterDropdown").classList.toggle("show");
}

function sortByPrice() {
    alert("Sorting by price...");
}

function sortByRate() {
    alert("Sorting by rate...");
}

window.onclick = function (event) {
    if (!event.target.matches('.filter-button')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            dropdowns[i].classList.remove('show');
        }
    }
}




function addToCart(game) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const existingGameIndex = cart.findIndex(item => item.name === game.name);
    if (existingGameIndex !== -1) {
        cart[existingGameIndex].quantity += 1;
    } else {
        let product = {
            name: game.name,
            image: "img/" + game.image,
            price: game.price,
            quantity: 1
        };
        cart.push(product);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
}
let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartContainer = document.getElementById("cart-items");
const subtotalEl = document.getElementById("subtotal");
const totalEl = document.getElementById("total");

function renderCart() {
    cartContainer.innerHTML = "";
    let subtotal = 0;

    cart.forEach((item, index) => {
        subtotal += item.price * item.quantity;

        const div = document.createElement("div");
        div.className = "product";

        div.innerHTML = `
  <div class="product-img">
      <img src="${item.image.startsWith("img/") ? item.image : "img/" + item.image}" />
  </div>
  <div class="product-info">
      <h2>${item.name}</h2>
  </div>
  <div class="quantity">
      <button onclick="updateQuantity(${index}, -1)">-</button>
      <span>${item.quantity}</span>
      <button onclick="updateQuantity(${index}, 1)">+</button>
  </div>
  <div class="price">LE ${item.price * item.quantity}</div>
  <button class="remove-btn" onclick="removeItem(${index})">❌</button>
`;
        cartContainer.appendChild(div);
    });

    subtotalEl.textContent = `LE ${subtotal.toFixed(2)}`;
    const shipping = subtotal > 0 ? 40 : 0;
    const discount = subtotal >= 300 ? 20 : 0;
    const total = subtotal + shipping - discount;

    document.getElementById("shipping").textContent = `LE ${shipping.toFixed(2)}`;
    document.getElementById("discount").textContent = `LE ${discount.toFixed(2)}`;
    totalEl.textContent = `LE ${total.toFixed(2)}`;

    localStorage.setItem("cart", JSON.stringify(cart));
}

function updateQuantity(index, change) {
    cart[index].quantity += change;
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }
    renderCart();
}

function removeItem(index) {
    cart.splice(index, 1);
    renderCart();
}
renderCart();
letcart = JSON.parse(localStorage.getItem("cart")) || [];
document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", () => {
        const name = button.getAttribute("data-name");
        const price = parseFloat(button.getAttribute("data-price"));
        const image = "img/" + button.getAttribute("data-image");

        const existing = cart.find(item => item.name === name);
        if (existing) {
            existing.quantity += 1;
        } else {
            cart.push({ name, price, image, quantity: 1 });
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        alert(`${name} added to cart!`);
    });
});

function toggleFavorite(favoriteElement) {
    let card = favoriteElement.closest('.card');
    let gameName = card.querySelector('h3').textContent;
    let gameImage = card.querySelector('.game-image').getAttribute("src");
    let gamePriceText = card.querySelector('.price').textContent;
    let gamePrice = parseFloat(gamePriceText.replace(/[^\d.]/g, ''));
    let gameQuantity = 1;
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    let index = favorites.findIndex(game => game.name === gameName);
    if (index === -1) {
        favorites.push({
            name: gameName,
            image: gameImage,
            price: gamePrice,
            quantity: gameQuantity
        });
        favoriteElement.querySelector('i').classList.remove('far');
        favoriteElement.querySelector('i').classList.add('fas');
    } else {
        favorites.splice(index, 1);
        favoriteElement.querySelector('i').classList.remove('fas');
        favoriteElement.querySelector('i').classList.add('far');
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
}
window.onload = function () {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    let favoriteIcons = document.querySelectorAll('.favorite');
    favoriteIcons.forEach(favorite => {
        let card = favorite.closest('.card');
        let gameName = card.querySelector('h3').textContent;
        if (favorites.some(game => game.name === gameName)) {
            favorite.querySelector('i').classList.remove('far');
            favorite.querySelector('i').classList.add('fas');
        }
    });
}
window.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('show');
        }, index * 100);
    });
});