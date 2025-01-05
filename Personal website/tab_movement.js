document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove 'active' class from all tabs and sections
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.content').forEach(c => c.classList.remove('active'));

        // Add 'active' class to clicked tab and corresponding section
        tab.classList.add('active');
        const sectionId = tab.getAttribute('data-tab');
        document.getElementById(sectionId).classList.add('active');
    });
});
// Select all images and buttons
const images = document.querySelectorAll('.carousel-images img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0; // Start with the first image

// Function to update the active image
function updateCarousel(index) {
    images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
    });
}

// Event listener for the "Next" button
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length; // Loop to the first image if at the end
    updateCarousel(currentIndex);
});

// Event listener for the "Previous" button
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Loop to the last image if at the beginning
    updateCarousel(currentIndex);
});

// Initialize the carousel
updateCarousel(currentIndex);