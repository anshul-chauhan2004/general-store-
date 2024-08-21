const products = [
    { id: 1, name: "Frozen Pizza", price: 5.99, image: "https://airfryingfoodie.com/wp-content/uploads/2023/05/Air-Fryer-Frozen-Pizza-7.jpg", category: "frozen" },
    { id: 2, name: "Frozen Vegetables", price: 2.99, image: "https://www.southernliving.com/thmb/7kdtUmtuI41QM0KDIRYO4zis_s4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/487930925-56a12f8a5f9b58b7d0bcdfdf.jpg", category: "frozen" },
    { id: 3, name: "Frozen Fish", price: 8.99, image: "https://5.imimg.com/data5/UY/BO/IR/SELLER-91983773/frozen-fish.jpg", category: "frozen" },
    { id: 4, name: "Dark Chocolate", price: 3.50, image: "https://m.media-amazon.com/images/I/81bEzp-vnjL.jpg", category: "confectionary" },
    { id: 5, name: "Candy Mix", price: 2.00, image: "https://www.jiomart.com/images/product/original/493031661/candzey-mix-fruits-candy-100-g-product-images-o493031661-p596698716-0-202407310923.jpg?im=Resize=(420,420)", category: "confectionary" },
    { id: 6, name: "Chocolate Truffles", price: 6.99, image: "https://www.sweetestmenu.com/wp-content/uploads/2018/10/chocolatetruffles3.jpg", category: "confectionary" },
    { id: 7, name: "Party Platter", price: 24.99, image: "https://res.cloudinary.com/purnesh/image/upload/w_540,f_auto,q_auto:eco,c_limit/obete%2Cmaujkardi-278400932-1260504394477938-564471550378622025-n-1.jpg", category: "entertaining" },
    { id: 8, name: "Champagne", price: 45.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZytgzwn0ZjFqeARJbIK5VFoPUyjYF0TazHw&s", category: "entertaining" },
    { id: 9, name: "Decorations Set", price: 12.50, image: "https://www.trinitychristmas.in/wp-content/uploads/2023/10/Trinity-Christmas-Baubles-59.jpg", category: "entertaining" },
    { id: 10, name: "Ice Cream", price: 4.50, image: "https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSRA1VvVWshDqdk-IbClyNwWoUAjMnFQ5KQLb8eH0hu4gCCvfvqMEcQqOF-CTro2maW", category: "frozen" },
    { id: 11, name: "Frozen Chicken Nuggets", price: 7.99, image: "https://images-cdn.ubuy.co.in/66a0bd068052fb4b8b43c957-great-value-fully-cooked-chicken-nuggets.jpg", category: "frozen" },
    { id: 12, name: "Milk Chocolate", price: 4.00, image: "https://vaya.in/recipes/wp-content/uploads/2018/02/Milk-Chocolate-1.jpg", category: "confectionary" },
    { id: 13, name: "Fruit Candy", price: 3.25, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnNekT1rie7v1gVW2EcUArbljgzPdlYcEkFQ&s", category: "confectionary" },
    { id: 14, name: "Wedding Cake", price: 55.00, image: "https://thundersbakery.ie/wp-content/uploads/2022/10/CC0A7047-scaled.jpg", category: "entertaining" },
    { id: 15, name: "Beer Sampler", price: 22.00, image: "https://m.media-amazon.com/images/I/91bB21LiEML._AC_UF350,350_QL80_.jpg", category: "entertaining" }
];

let cart = [];

function displayProducts() {
    const productListing = document.getElementById('product-listing');
    productListing.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.setAttribute('data-category', product.category);

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productListing.appendChild(productCard);
    });
}

function filterProducts() {
    const category = document.getElementById('category').value;
    const search = document.getElementById('search').value.toLowerCase();
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        const productName = card.querySelector('h3').textContent.toLowerCase();
        const productCategory = card.getAttribute('data-category');

        if ((category === 'all' || category === productCategory) && productName.includes(search)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const total = document.getElementById('total');

    cartItems.innerHTML = '';
    let totalPrice = 0;

    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <p>${item.name}</p>
            <p>$${item.price.toFixed(2)}</p>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItems.appendChild(cartItem);
        totalPrice += item.price;
    });

    cartCount.textContent = cart.length;
    total.textContent = totalPrice.toFixed(2);
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function checkout() {
    alert('Checkout process initiated!');
}

displayProducts();