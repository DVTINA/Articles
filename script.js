// Liste des produits
const products = [
    { id: 1, name: "Article 1", price: 29.99, image: "https://via.placeholder.com/200" },
    { id: 2, name: "Article 2", price: 39.99, image: "https://via.placeholder.com/200" },
    { id: 3, name: "Article 3", price: 49.99, image: "https://via.placeholder.com/200" }
];

// Afficher les produits
function displayProducts() {
    const productGrid = document.querySelector('.product-grid');
    productGrid.innerHTML = '';
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Prix : ${product.price} €</p>
        `;
        productGrid.appendChild(productCard);
    });
}

// Remplir le menu déroulant du formulaire
function populateProductSelect() {
    const select = document.getElementById('product');
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = `${product.name} - ${product.price} €`;
        select.appendChild(option);
    });
}

// Afficher le message de confirmation depuis l'URL (après redirection)
function displayMessage() {
    const urlParams = new URLSearchParams(window.location.search);
    const message = urlParams.get('message');
    const error = urlParams.get('error');
    const formMessage = document.getElementById('formMessage');
    
    if (message) {
        formMessage.textContent = decodeURIComponent(message);
        formMessage.style.color = 'green';
    } else if (error) {
        formMessage.textContent = decodeURIComponent(error);
        formMessage.style.color = 'red';
    }
}

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
    populateProductSelect();
    displayMessage();
});