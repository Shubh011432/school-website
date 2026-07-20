// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Header shadow on scroll
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 4px 15px rgba(0,0,0,0.3)";
    } else {
        header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.2)";
    }
});

// Gallery image hover effect
const images = document.querySelectorAll(".gallery img");

images.forEach(img => {
    img.addEventListener("mouseover", () => {
        img.style.transform = "scale(1.08)";
    });

    img.addEventListener("mouseout", () => {
        img.style.transform = "scale(1)";
    });
});function openAdmission() {
    document.getElementById("admissionPopup").style.display = "flex";
}

function closeAdmission() {
    document.getElementById("admissionPopup").style.display = "none";
}

window.onclick = function(event) {
    let popup = document.getElementById("admissionPopup");

    if (event.target == popup) {
        popup.style.display = "none";
    }
}