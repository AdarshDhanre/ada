// Array of main birthday wishes for Mahi
const mainBirthdayWishes = [
    "Happy Birthday, dearest Mahi! May your day be as bright and beautiful as your smile. Wishing you endless joy and success! 🌟",
    "To the wonderful Mahi, Happy Birthday! May this new year bring you exciting adventures, fulfilling moments, and all your heart desires. ❤️",
    "On your special day, Mahi, wishing you a year filled with laughter, love, and all the happiness in the world. Happy Birthday! 🎉",
    "Happy Birthday, Mahi! You're an incredible person, and I wish you nothing but the best today and always. Enjoy every moment! 🥳",
    "May your birthday be just the beginning of a year full of happy memories, amazing experiences, and cherished dreams coming true. Happy Birthday, Mahi! ✨"
];

// Function to generate a random main birthday wish
function generateBirthdayWish() {
    const mainWishOutput = document.getElementById("main-wish");
    const randomIndex = Math.floor(Math.random() * mainBirthdayWishes.length);
    mainWishOutput.textContent = mainBirthdayWishes[randomIndex];
    mainWishOutput.style.color = '#e91e63'; // Set wish color
    mainWishOutput.style.animation = 'fadeIn 1s ease-out'; // Add a fade-in animation
}


// Function to handle sensation on image click
document.addEventListener('DOMContentLoaded', () => {
    const photoItems = document.querySelectorAll('.photo-item');

    photoItems.forEach(item => {
        const img = item.querySelector('img');
        const sensationPopup = item.querySelector('.sensation-popup');
        const sensationText = img.dataset.sensationText; // Get specific text from data attribute

        item.addEventListener('click', () => {
            // Display the sensation
            sensationPopup.textContent = sensationText;
            sensationPopup.classList.add('show');

            // Hide the sensation after a short delay
            setTimeout(() => {
                sensationPopup.classList.remove('show');
            }, 1000); // Sensation disappears after 1 second
        });
    });

    // Add CSS for fade-in animation for main wish dynamically
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
    `;
    document.head.appendChild(styleSheet);
});