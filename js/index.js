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

    document.addEventListener('mousemove', (e) => {
        cursor.style.top = `${e.clientY}px`;
        cursor.style.left = `${e.clientX}px`;
    });

    const text = "Web/App Developer,Blog Writer & Tech Enthusiast.";
    const typingTextElement = document.getElementById('typing-text');
    
    let index = 0;

    function type() {
        if (index < text.length) {
            typingTextElement.innerHTML += text.charAt(index);
            index++;
            typingTextElement.style.width = `${typingTextElement.scrollWidth}px`; // Adjust width dynamically
            setTimeout(type, 100); // Adjust speed by changing the timeout duration
        } else {
            typingTextElement.classList.add('multi-line'); // Switch to multi-line after typing is done
        }
    }

    type();
});