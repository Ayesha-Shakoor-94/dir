// Function to validate form input
function validateForm() {
    var name = document.getElementById('product-name').value.trim();
    var category = document.getElementById('category').value.trim();
    var price = parseFloat(document.getElementById('price').value);
    var stock = parseInt(document.getElementById('stock').value, 10);
    if (!name) {
        alert('Product Name is required');
        return false;
    }
    if (!category) {
        alert('Category is required');
        return false;
    }
    if (isNaN(price) || price <= 0) {
        alert('Price must be a positive number');
        return false;
    }
    if (isNaN(stock) || stock < 0) {
        alert('Stock Level must be a non-negative number');
        return false;
    }
    return true;
}
// Function to create a new product row
function addProductToTable(product) {
    var productsTable = document.getElementById('products-table').getElementsByTagName('tbody')[0];
    var newRow = productsTable.insertRow();
    newRow.innerHTML = "\n        <td>".concat(product.name, "</td>\n        <td>").concat(product.category, "</td>\n        <td>$").concat(product.price.toFixed(2), "</td>\n        <td>").concat(product.stock, "</td>\n        <td><button class=\"delete-btn\">Delete</button></td>\n    ");
}
// Event listener for form submission
document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('product-form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        if (!validateForm())
            return;
        var productName = document.getElementById('product-name').value;
        var category = document.getElementById('category').value;
        var price = parseFloat(document.getElementById('price').value);
        var stock = parseInt(document.getElementById('stock').value, 10);
        var newProduct = {
            name: productName,
            category: category,
            price: price,
            stock: stock
        };
        addProductToTable(newProduct);
        form.reset();
    });
    // Event listener for delete button
    document.getElementById('products-table').addEventListener('click', function (event) {
        var target = event.target;
        if (target.classList.contains('delete-btn')) {
            target.parentElement.parentElement.remove();
        }
    });
});
