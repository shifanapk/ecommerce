
function filterProducts(category) {
    var items = document.getElementsByClassName('product-item');
    for (var i = 0; i < items.length; i++) {
        if (category === 'all') {
            items[i].style.display = 'block'; // Show all products
        } else if (items[i].classList.contains(category)) {
            items[i].style.display = 'block'; // Show only products with the selected category
        } else {
            items[i].style.display = 'none'; // Hide products of other categories
        }
    }

}

function filterByPrice() {
    var priceRange = document.getElementById('priceRange').value;
    var items = document.getElementsByClassName('product-item');

    for (var i = 0; i < items.length; i++) {
        var productPrice = parseInt(items[i].getAttribute('data-price'));
        if (productPrice <= priceRange) {
            items[i].style.display = 'block'; // Show product if within price range
        } else {
            items[i].style.display = 'none'; // Hide product if out of price range
        }
    } filterByPrice(); // Call price filter after category filter
}

// Add product to cart
const addToCartBtn = document.getElementById('addToCartBtn');
addToCartBtn.addEventListener('click', function () {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Get quantity
    const quantity = document.getElementById('quantity').value;

    // Check if product is already in cart
    const productInCart = cart.find(item => item.id === product.id);
    if (productInCart) {
        productInCart.quantity += parseInt(quantity);
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: parseInt(quantity),
            image: product.image
        });
    }

    // Save cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    alert('Product added to cart!');
});

// Quantity button logic
const quantityInput = document.getElementById('quantity');
const quantityMinusBtn = document.getElementById('quantity-minus');
const quantityPlusBtn = document.getElementById('quantity-plus');

quantityMinusBtn.addEventListener('click', function () {
    let quantityValue = parseInt(quantityInput.value);
    if (quantityValue > 1) {
        quantityInput.value = quantityValue - 1;
    }
});

quantityPlusBtn.addEventListener('click', function () {
    let quantityValue = parseInt(quantityInput.value);
    if (quantityValue < 10) {
        quantityInput.value = quantityValue + 1;
    }
});




