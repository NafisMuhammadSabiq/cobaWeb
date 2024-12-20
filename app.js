const products = [
    { id: 1, name: "Sugali Alpha", price: 1500000, image: "gambar/kanoman.jpg" },
    { id: 2, name: "Mandala Gm", price: 2000000, image: "gambar/mandalagm.jpg" },
    { id: 3, name: "Sasuke jetli", price: 2000000, image: "gambar/petirarafah.jpg" },
    { id: 4, name: "Sugali", price: 1500000, image: "gambar/sasukejetli.jpg" },
    { id: 5, name: "Petir Alpha", price: 1500000, image: "gambar/sugalialpha.jpg" },
];

function displayProducts() {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <h2>${product.name}</h2>
            <img src="${product.image}" alt="${product.name}" style="width: 100px; height: auto;">
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
