// 1. Efek Mesin Tik (Typewriter Effect)
const roleElement = document.querySelector('.role');
const textToType = "CREATIVE UI/UX DESIGNER & FRONT-END DEVELOPER";
let charIndex = 0;

roleElement.innerHTML = '';

function typeWriter() {
    if (charIndex < textToType.length) {
        roleElement.innerHTML += textToType.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 100); // Kecepatan ketik 100ms
    }
}
window.addEventListener('load', typeWriter);

// 2. Sticky Header & Active Menu (Saat Di-scroll)
const header = document.getElementById('header');
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-links li a');

window.addEventListener('scroll', () => {
    // Memberikan background gelap pada header saat scroll ke bawah
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    // Mengganti status aktif pada menu navigasi sesuai section yang terlihat
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// 3. Efek Scroll Reveal (Animasi elemen muncul perlahan dari bawah)
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100; // Jarak trigger animasi

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}
// Jalankan fungsi reveal saat scroll dan saat halaman pertama kali dimuat
window.addEventListener("scroll", reveal);
reveal();