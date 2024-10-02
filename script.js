
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
