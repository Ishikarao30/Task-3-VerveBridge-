// Sample Product Data with Realistic Images
const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 1200, image: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW1geGv?ver=e834&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true" },
    { id: 2, name: "Smartphone", category: "Electronics", price: 800, image: "https://img.freepik.com/premium-photo/smartphone-balancing-with-pink-background_23-2150271746.jpg" },
    { id: 3, name: "T-Shirt", category: "Clothing", price: 20, image: "https://images-platform.99static.com//V5Aggijed5kEhVJDY3tsANygtes=/99x0:1598x1499/fit-in/500x500/projects-files/85/8584/858491/42c0951d-7e2d-4968-aa2b-0d1139843ac6.jpg" },
    { id: 4, name: "Jeans", category: "Clothing", price: 50, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Kszy6H15dZYzX9rWikHxSdl_9OZsWg_7iQ&s" },
    { id: 5, name: "Microwave", category: "Home Appliances", price: 150, image: "https://img.etimg.com/thumb/width-1600,height-900,imgsize-47640,resizemode-75,msid-92847221/top-trending-products/kitchen-dining/microwave/best-microwave-oven-under-30000.jpg" },
    { id: 6, name: "Fridge", category: "Home Appliances", price: 900, image: "https://media.croma.com/image/upload/v1710847149/Croma%20Assets/Large%20Appliances/Refrigerator/Images/271369_0_aq6xu0.png" }
];

let filteredProducts = products;
let cart = [];

// Load Products on Page Load
window.onload = function () {
    displayProducts(products);
}

// Function to Display Products
function displayProducts(productList) {
    const productContainer = document.getElementById('product-list');
    productContainer.innerHTML = '';
    productList.forEach(product => {
        productContainer.innerHTML += `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                <i class="fas fa-cart-plus"></i> Add to Cart
            </button>
        </div>
        `;
    });
}

// Filter Products by Category
function filterByCategory(category) {
    filteredProducts = products.filter(product => product.category === category);
    displayProducts(filteredProducts);
}

// Clear Filter
function clearFilter() {
    filteredProducts = products;
    displayProducts(filteredProducts);
}

// Sort Products by Price
function sortProducts() {
    const sortOption = document.getElementById('sort-options').value;
    if (sortOption === 'low-high') {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'high-low') {
        filteredProducts.sort((a, b) => b.price - a.price);
    }
    displayProducts(filteredProducts);
}

// Add Product to Cart
function addToCart(productId) {
    const product = products.find(product => product.id === productId);
    cart.push(product);
    document.getElementById('cart-count').innerText = cart.length;

    const cartNotification = document.createElement('div');
    cartNotification.classList.add('cart-notification');
    cartNotification.innerText = `${product.name} added to cart!`;
    document.body.appendChild(cartNotification);
    
    setTimeout(() => {
        cartNotification.remove();
    }, 2000);
}
