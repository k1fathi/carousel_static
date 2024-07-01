// Function to open the popup with the corresponding image
function openPopup(imgElement) {
    const imageId = imgElement.getAttribute("data-id");
    const popup = document.getElementById("popup");
    const popupImg = document.getElementById("popup-img");
    const loader = document.getElementById("loader");

    popup.style.display = "block";
    loader.style.display = "block";
    popupImg.style.display = "none"; // Initially hide the image

    // Load the corresponding image based on the data-id
    switch (imageId) {
        case 'data-tracking':
            popupImg.src = "path/to/data-tracking-large.jpg";
            break;
        case 'screens':
            popupImg.src = "path/to/screens-large.jpg";
            break;
        case 'dashboards':
            popupImg.src = "path/to/dashboards-large.jpg";
            break;
        case 'games':
            popupImg.src = "path/to/games-large.jpg";
            break;
        case 'analytics':
            popupImg.src = "path/to/analytics-large.jpg";
            break;
        case 'awards':
            popupImg.src = "path/to/awards-large.jpg";
            break;
        default:
            popupImg.src = "";
    }
}

// Function to hide the loader and show the image
function hideLoader() {
    const loader = document.getElementById("loader");
    const popupImg = document.getElementById("popup-img");
    loader.style.display = "none";
    popupImg.style.display = "block"; // Show the image once it's loaded
}

// Function to close the popup
function closePopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "none";
}

// Function to scroll the carousel
function scrollCarousel(direction) {
    const carousel = document.querySelector('.carousel');
    const images = document.querySelectorAll('.carousel-image');
    const carouselWidth = carousel.offsetWidth;
    const imageWidth = images[0].offsetWidth;
    const scrollAmount = imageWidth + 10; // Adjust scroll amount as needed, accounting for gap

    carousel.scrollBy({
        top: 0,
        left: direction * scrollAmount,
        behavior: 'smooth'
    });

    setTimeout(() => {
        const centerIndex = Math.floor((carousel.scrollLeft + carouselWidth / 2) / scrollAmount);
        images.forEach((img, index) => {
            if (index === centerIndex) {
                img.classList.add('center');
            } else {
                img.classList.remove('center');
            }
        });
    }, 300);
}

// Add event listeners for hover effect
document.querySelectorAll('.carousel-image').forEach(image => {
    const defaultSrc = image.src;
    const hoverSrc = image.getAttribute('data-hover');

    image.addEventListener('mouseover', () => {
        image.src = hoverSrc;
    });

    image.addEventListener('mouseout', () => {
        image.src = defaultSrc;
    });
});
