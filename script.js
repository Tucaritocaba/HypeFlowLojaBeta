
document.addEventListener("DOMContentLoaded", () => {
    const products = [
        { name: "Instagram", type: "Seguidores", price: 2.0 },
        { name: "YouTube", type: "Views", price: 2.0 },
        { name: "TikTok", type: "Curtidas", price: 2.0 },
        { name: "YouTube", type: "Inscritos", price: 2.0 },
        { name: "Kwai", type: "Seguidores", price: 2.0 },
        { name: "Telegram", type: "Visualizações", price: 2.0 },
        { name: "Twitch", type: "Seguidores", price: 2.0 }
    ];

    const productsContainer = document.getElementById("products");
    const cartPanel = document.getElementById("cart-panel");
    const cartBtn = document.getElementById("cart-btn");
    const closeCartBtn = document.getElementById("close-cart");
    const cartItems = document.getElementById("cart-items");

    let cart = [];

    products.forEach(product => {
        const div = document.createElement("div");
        div.className = "product-card";
        div.innerHTML = `
            <h3>${product.type} ${product.name}</h3>
            <p>Preço: R$ ${product.price.toFixed(2)}</p>
            <button onclick='addToCart("${product.name}", "${product.type}", ${product.price})'>Adicionar ao Carrinho</button>
        `;
        productsContainer.appendChild(div);
    });

    window.addToCart = (name, type, price) => {
        cart.push({ name, type, price });
        updateCart();
    };

    const updateCart = () => {
        cartItems.innerHTML = "";
        cart.forEach((item, index) => {
            const li = document.createElement("li");
            li.textContent = `${item.type} ${item.name} - R$${item.price.toFixed(2)}`;
            cartItems.appendChild(li);
        });
    };

    cartBtn.onclick = () => {
        cartPanel.classList.remove("hidden");
    };

    closeCartBtn.onclick = () => {
        cartPanel.classList.add("hidden");
    };
});
