
const productsGrid = document.getElementById('productsGrid');
const collectionTitle = document.querySelector('.collection-title');
const products = [
    { name: 'Rectangle puzzle', image: 'img2/photo_2025-05-18_15-40-48-removebg-preview.png', price: 100, page: 'puzzle.html' },
    { name: 'Square puzzle', image: 'img2/aaa.png', price: 100, page: 'puzzle.html' },
    { name: 'Round puzzle', image: 'img2/photo_2025-05-18_15-40-48__3_-removebg-preview.png', price: 100, page: 'puzzle.html' },
    { name: 'Rectangle board', image: 'img2/photo_2025-05-18_17-39-12-removebg-preview.png', price: 110, page: 'puzzle.html' },
    { name: 'Square game board', image: 'img2/photo_2025-05-18_17-39-38-removebg-preview.png', price: 120 },
    { name: 'Rectangle card', image: 'img2/photo_2025-05-18_15-42-36-removebg-preview.png', price: 150 },
    { name: 'Tall rectangle card', image: 'img2/photo_2025-05-18_17-42-52-removebg-preview.png', price: 110 },
    { name: 'Circle card', image: 'img2/photo_2025-05-18_17-43-23-removebg-preview.png', price: 200 },
    { name: 'Domina', image: 'img2/photo_2025-05-20_00-30-10-removebg-preview.png', price: 150 },
    { name: 'Lego game', image: 'img2/photo_2025-05-18_17-44-46-removebg-preview.png', price: 160 },
    { name: 'Game pawns', image: 'img2/photo_2025-05-18_17-46-22-removebg-preview.png', price: 210 },
    { name: 'Game token', image: 'img2/photo_2025-05-18_17-46-34-removebg-preview.png', price: 225 },
    { name: 'Dice set', image: 'img2/photo_2025-05-18_17-47-02-removebg-preview.png', price: 215 },
    { name: 'Digital timer', image: 'img2/photo_2025-05-18_17-47-44-removebg-preview.png', price: 260 },
    { name: 'Square tray', image: 'img2/photo_2025-05-18_17-49-46-removebg-preview.png', price: 270 },
    { name: 'Sand timer', image: 'img2/photo_2025-05-18_17-50-11-removebg-preview.png', price: 125 },
    { name: 'Black marker', image: 'img2/photo_2025-05-18_17-51-44-removebg-preview.png', price: 225 },
    { name: 'Spinner', image: 'img2/photo_2025-05-18_17-52-37-removebg-preview.png', price: 235 },
    { name: 'Card holder', image: 'img2/photo_2025-05-18_17-53-04-removebg-preview.png', price: 175 },
    { name: 'Roll mat', image: 'img2/photo_2025-05-18_17-53-24-removebg-preview.png', price: 195 },
    { name: 'Square box', image: 'img2/photo_2025-05-18_17-54-08-removebg-preview.png', price: 185 },
    { name: 'Rectangle box', image: 'img2/photo_2025-05-20_16-38-52-removebg-preview.png', price: 200 },
    { name: 'Booster box (full)', image: 'img2/photo_2025-05-20_16-38-53.jpg', price: 110 },
    { name: 'Magnetic box', image: 'img2/photo_2025-05-20_16-38-50.jpg', price: 120 },
    { name: 'Tuck box', image: 'img2/photo_2025-05-20_16-38-51-removebg-preview.png', price: 130 },
    { name: 'Rectangle hook box', image: 'img2/123.png', price: 140 },
    { name: 'Square hook box', image: 'img2/456.png', price: 160 },
    { name: 'Burlap bag', image: 'img2/photo_2025-05-20_16-38-54-removebg-preview.png', price: 210 },
    { name: 'Rectangle tin', image: 'img2/photo_2025-05-20_16-38-52__2_-removebg-preview.png', price: 235 },
    { name: 'Square tin', image: 'img2/photo_2025-05-20_16-38-50-removebg-preview.png', price: 255 }
];
function displayProducts() {
    productsGrid.innerHTML = '';

    products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('card5');

        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="cardimg1 clickable">
            <div class="card-content">
                <h2 class="cards-title1 clickable">${product.name}</h2>
              <p class="card-price">from ${product.price} LE</p>

                <button class="add-btn">Start Design</button>
            </div>
        `;

        productsGrid.appendChild(card);
        const navigate = () => {
            const fileName = product.page || `${product.name.toLowerCase().replace(/\s+/g, '')}.html`;
            window.location.href = fileName;
        };

        card.querySelectorAll('.clickable').forEach(el => el.addEventListener('click', navigate));
        card.querySelector('.add-btn').addEventListener('click', navigate);
    });

    if (collectionTitle) {
        collectionTitle.textContent = 'Games';
    }
}
window.addEventListener('DOMContentLoaded', displayProducts);
