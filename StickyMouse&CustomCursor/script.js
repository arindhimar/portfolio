document.addEventListener('DOMContentLoaded', () => {
    const customCursor = document.querySelector('.custom-cursor');
    const target = document.querySelector('.target');
    const radius = 100; // Radius around the div

    document.addEventListener('mousemove', (e) => {
        const targetRect = target.getBoundingClientRect();
        const targetCenterX = targetRect.left + targetRect.width / 2;
        const targetCenterY = targetRect.top + targetRect.height / 2;
        const distanceX = e.clientX - targetCenterX;
        const distanceY = e.clientY - targetCenterY;
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

        if (distance < radius) {
            customCursor.style.left = `${targetCenterX}px`;
            customCursor.style.top = `${targetCenterY}px`;
        } else {
            customCursor.style.left = `${e.clientX}px`;
            customCursor.style.top = `${e.clientY}px`;
        }
    });
});
