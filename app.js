const products = [
    { id: 1, name: "Produk 1", price: 10000 },
    { id: 2, name: "Produk 2", price: 20000 },
    { id: 3, name: "Produk 3", price: 30000 },
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
