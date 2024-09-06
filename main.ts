// Define Product interface
interface Product {
    name: string;
    category: string;
    price: number;
    stock: number;
}

// Function to validate form input
function validateForm(): boolean {
    const name = (document.getElementById('product-name') as HTMLInputElement).value.trim();
    const category = (document.getElementById('category') as HTMLInputElement).value.trim();
    const price = parseFloat((document.getElementById('price') as HTMLInputElement).value);
    const stock = parseInt((document.getElementById('stock') as HTMLInputElement).value, 10);

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
function addProductToTable(product: Product): void {
    const productsTable = document.getElementById('products-table')!.getElementsByTagName('tbody')[0];
    const newRow = productsTable.insertRow();
    newRow.innerHTML = `
        <td>${product.name}</td>
        <td>${product.category}</td>
        <td>$${product.price.toFixed(2)}</td>
        <td>${product.stock}</td>
        <td><button class="delete-btn">Delete</button></td>
    `;
}

// Event listener for form submission
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('product-form') as HTMLFormElement;

    form.addEventListener('submit', (event: Event) => {
        event.preventDefault();

        if (!validateForm()) return;

        const productName = (document.getElementById('product-name') as HTMLInputElement).value;
        const category = (document.getElementById('category') as HTMLInputElement).value;
        const price = parseFloat((document.getElementById('price') as HTMLInputElement).value);
        const stock = parseInt((document.getElementById('stock') as HTMLInputElement).value, 10);

        const newProduct: Product = {
            name: productName,
            category: category,
            price: price,
            stock: stock
        };

        addProductToTable(newProduct);

        form.reset();
    });

    // Event listener for delete button
    document.getElementById('products-table')!.addEventListener('click', (event: Event) => {
        const target = event.target as HTMLElement;
        if (target.classList.contains('delete-btn')) {
            target.parentElement!.parentElement!.remove();
        }
    });
});
