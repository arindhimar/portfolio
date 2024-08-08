document.addEventListener('DOMContentLoaded', () => {
    const customCursor = document.querySelector('.custom-cursor');
    const blogCards = document.querySelectorAll('.blog-card');
    const radius = 250; // Radius around the div

    document.addEventListener('mousemove', (e) => {
        let closestCard = null;
        let closestDistance = Infinity;

        blogCards.forEach((card) => {
            const cardRect = card.getBoundingClientRect();
            const cardCenterX = cardRect.left + cardRect.width / 2;
            const cardCenterY = cardRect.top + cardRect.height / 2;
            const distanceX = e.clientX - cardCenterX;
            const distanceY = e.clientY - cardCenterY;
            const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

            if (distance < radius && distance < closestDistance) {
                closestCard = card;
                closestDistance = distance;
            }
        });

        if (closestCard) {
            const closestCardRect = closestCard.getBoundingClientRect();
            const closestCardCenterX = closestCardRect.left + closestCardRect.width / 2;
            const closestCardCenterY = closestCardRect.top + closestCardRect.height / 2;
            customCursor.style.left = `${closestCardCenterX}px`;
            customCursor.style.top = `${closestCardCenterY}px`;
            customCursor.style.visibility = 'hidden'; /* Hide the custom cursor */
            closestCard.style.cursor = 'none'; /* Hide the default mouse cursor on the card */
        } else {
            customCursor.style.left = `${e.clientX}px`;
            customCursor.style.top = `${e.clientY}px`;
            customCursor.style.visibility = 'visible'; /* Show the custom cursor */
            closestCard.style.cursor = 'auto'; /* Show the default mouse cursor on the card */
        }
    });
});