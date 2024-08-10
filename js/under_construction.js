document.addEventListener('DOMContentLoaded', () => {
    const customCursor = document.querySelector('.custom-cursor');

    document.addEventListener('mousemove', (e) => {
        customCursor.style.left = `${e.clientX}px`;
        customCursor.style.top = `${e.clientY}px`;
    });
});
