const products = [
    { id: 1, name: "Sugali Alpha", price: 1.500.000 },
    { id: 2, name: "Mandala Gm", price: 2.000.000 },
    { id: 3, name: "Sasuke jetli", price: 2.000.000 },
    { id: 4, name: "Sugali", price: 1.500.000 },
    { id: 5, name: "Petir Alpha", price: 1.500.000 },
];

function displayProducts() {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <h2>${product.name}</h2>
            <p>Harga: Rp ${product.price}</p>
            <button onclick="addToCart(${product.id})">Tambah ke Keranjang</button>
        `;
        productList.appendChild(productDiv);
    });
}

function addToCart(productId) {
    alert(`Produk dengan ID ${productId} telah ditambahkan ke keranjang!`);
}

document.addEventListener('DOMContentLoaded', displayProducts);
