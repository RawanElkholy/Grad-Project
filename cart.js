
let cart = JSON.parse(localStorage.getItem("cart")) || [];
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
        updateCartCount();
        alert(`${name} added to cart!`);
    });
});

function updateCartCount() {
    const cartCountElement = document.getElementById("cart-count");
    if (cartCountElement) {
        const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
        cartCountElement.textContent = totalItems;
    }
}
window.addEventListener('DOMContentLoaded', updateCartCount);
