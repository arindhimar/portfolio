document.addEventListener('DOMContentLoaded', () => {
    const customCursor = document.querySelector('.custom-cursor');
    const blogCards = document.querySelectorAll('.blog-card');
    const radius = 100; // Radius around the div

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
        } else {
            customCursor.style.left = `${e.clientX}px`;
            customCursor.style.top = `${e.clientY}px`;
        }
    });
});

const line2 = document.querySelector('.line-2');
const line2Typing = document.querySelector('.line-2 .typing');

line2Typing.addEventListener('animationend', () => {
    line2.classList.add('typing-complete');
});
