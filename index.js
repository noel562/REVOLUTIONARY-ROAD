document.addEventListener('DOMContentLoaded', function () {
    const moviesContainer = document.querySelector('.movies-container'); // Use class selector

    // Get all movie cards in the section
    const movieCards = [...moviesContainer.querySelectorAll('.movie-block')];

    // Intersection Observer to detect when cards are in view
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Cards are in view, apply wave effect
                    movieCards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add('wave');

                            // Remove the wave class after the animation completes
                            card.addEventListener('animationend', () => {
                                card.classList.remove('wave');
                            }, { once: true }); // Run only once
                        }, index * 200); // Delay each card by 200ms for wave effect
                    });
                }
            });
        },
        {
            threshold: 0.5, // Trigger when 50% of the card is visible
        }
    );

    // Observe each movie card
    movieCards.forEach((card) => {
        observer.observe(card);
    });
});


// Function to open the image in full screen
function openImagePopup(src) {
    document.getElementById("popup-img").src = src;
    document.getElementById("image-popup").style.display = "flex";
}

// Function to close the full-screen popup
function closeImagePopup() {
    document.getElementById("image-popup").style.display = "none";
}
