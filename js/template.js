$(document).ready(function () {
    const button = document.querySelector(".navbar-toggler");
    const navOverlay = document.querySelector(".nav-overlay");
    const navbarCollapse = document.querySelector(".navbar-collapse");

    button.addEventListener("click", function () {
        navOverlay.classList.toggle("active");
    });

    navOverlay.addEventListener("click", function (event) {
        if (event.target === navOverlay) {
            navOverlay.classList.remove("active");
            navbarCollapse.classList.remove("show");
        }
    });

    const cursor = document.querySelector('.custom-cursor');

    document.addEventListener('mousemove', (    e) => {
        cursor.style.top = `${e.clientY}px`;
        cursor.style.left = `${e.clientX}px`;
    });
});