
// Fetch product details from URL parameters
var urlParams = new URLSearchParams(window.location.search);
var product = urlParams.get('product');
var quantity = urlParams.get('quantity');
var total = urlParams.get('total');

// Fill in the form with product details
document.getElementById('product').value = product;
document.getElementById('quantity').value = quantity;
document.getElementById('total').textContent = total; // Set the text content of the <span> element