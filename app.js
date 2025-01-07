const products = [
    { id: 1, name: "Sugali Alpha", price: 1500000, image: "gambar/kanoman.jpg" },
    { id: 2, name: "Mandala Gm", price: 2000000, image: "gambar/mandalagm.jpg" },
    { id: 3, name: "Sasuke jetli", price: 2000000, image: "gambar/petirarafah.jpg" },
    { id: 4, name: "Sugali", price: 1500000, image: "gambar/sasukejetli.jpg" },
    { id: 5, name: "Petir Alpha", price: 1500000, image: "gambar/sugalialpha.jpg" },
];

let cart = []; // Array untuk menyimpan produk yang ditambahkan ke keranjang

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
    const product = products.find(p => p.id === productId);
    cart.push(product); // Menambahkan produk ke keranjang
    alert(`${product.name} telah ditambahkan ke keranjang!`);
    updateCart(); // Memperbarui tampilan keranjang
}

function updateCart() {
    const cartCount = document.getElementById('cart-count');
    const totalPrice = document.getElementById('total-price');
    
    cartCount.innerText = cart.length; // Menampilkan jumlah item di keranjang

    const total = cart.reduce((sum, product) => sum + product.price, 0);
    totalPrice.innerText = `Total Harga: Rp ${total}`; // Menampilkan total harga
}

function checkout() {
    if (cart.length === 0) {
        alert("Keranjang Anda kosong!");
        return;
    }
    const total = cart.reduce((sum, product) => sum + product.price, 0);
    alert(`Total yang harus dibayar: Rp ${total}\nTerima kasih telah berbelanja!`);
    cart = []; // Mengosongkan keranjang setelah checkout
    updateCart(); // Memperbarui tampilan keranjang
}

document.addEventListener('DOMContentLoaded', displayProducts);
