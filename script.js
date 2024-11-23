document.addEventListener('DOMContentLoaded', function() {
    // Clock
    function updateClock() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
    }
    setInterval(updateClock, 1000);
    updateClock();

    // Visitor count (example, should be replaced with actual logic)
    document.getElementById('visitor-count').textContent = Math.floor(Math.random() * 100);
}

let currentSlide = 0; // Indeks slide saat ini
const slides = document.querySelectorAll('.carousel-slide'); // Mengambil semua slide

function showSlide(index) {
    // Menghitung indeks slide yang valid
    if (index >= slides.length) {
        currentSlide = 0; // Kembali ke slide pertama
    } else if (index < 0) {
        currentSlide = slides.length - 1; // Kembali ke slide terakhir
    } else {
        currentSlide = index; // Tetap pada indeks yang valid
    }

    // Mengatur transformasi untuk menampilkan slide yang sesuai
    const carouselContainer = document.querySelector('.carousel-container');
    carouselContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function changeSlide(direction) {
    showSlide(currentSlide + direction); // Mengubah slide berdasarkan arah
}

// Menampilkan slide pertama saat halaman dimuat
showSlide(currentSlide);

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman form secara default

    // Mengambil nilai dari input
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Menampilkan pesan respons
    const responseMessage = document.getElementById('responseMessage');
    responseMessage.innerHTML = `<p>Thank you, ${name}! Your message has been sent.</p>`;

    // Reset form setelah pengiriman
    document.getElementById('contactForm').reset();
});


