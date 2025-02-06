// Array of content for the box
const contentArray = [
    { 
        title: "About Us", 
        content: "Welcome to AHR Facility Management, where we are redefining operational excellence and sustainability in the industry. We deliver seamless, efficient, and innovative solutions through a unified management system tailored to meet your unique needs. Our approach is powered by cutting-edge technologies, including IoT, AI, and advanced analytics, enabling us to optimize operations, reduce costs, and enhance the value of your assets." 
    },
    { 
        title: "Our Vision", 
        content: "To deliver unparalleled operational excellence through integrated facility management services, transforming client operations and elevating industry standards." 
    },
    { 
        title: "Our Mission", 
        content: "We leverage IoT, AI, and advanced technologies to optimize operations, reduce costs, and improve service quality. Our commitment to sustainability and tailored client solutions ensures top-tier service delivery." 
    }
];

// Array of background images
const images = [
    'img/IMG-20250205-WA0013.jpg',
    'img/IMG-20250205-WA0019.jpg',
    'img/IMG-20250205-WA0021.jpg'
];

// Variables
let currentIndex = 0;
const mainElement = document.querySelector('.main');
const boxTitle = document.getElementById('box-title');
const boxContent = document.getElementById('box-content');
const slider = document.querySelector('.slider');
let scrollAmount = 0;
const scrollStep = 315; // Width of image + margin

// Function to preload images
function preloadImages() {
    images.forEach(image => {
        const img = new Image();
        img.src = image;
    });
}

// Function to update the box content with GSAP animations
function updateBoxContent() {
    // Fade out current content
    gsap.to([boxTitle, boxContent], {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
            // Update content
            boxTitle.textContent = contentArray[currentIndex].title;
            boxContent.textContent = contentArray[currentIndex].content;

            // Fade in new content
            gsap.to([boxTitle, boxContent], {
                opacity: 1,
                duration: 0.5
            });
        }
    });
}

// Function to change the background image with GSAP animations
function changeBackground() {
    gsap.to(mainElement, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
            mainElement.style.backgroundImage = `linear-gradient(rgba(250, 247, 247, 0.245), rgba(111, 143, 184, 0.816)), url(${images[currentIndex]})`;
            gsap.to(mainElement, {
                opacity: 1,
                duration: 0.5
            });
        }
    });
}

// Function to change content and background
function changeContent(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = contentArray.length - 1;
    } else if (currentIndex >= contentArray.length) {
        currentIndex = 0;
    }
    updateBoxContent();
    changeBackground();
}

// Function to handle slider navigation
function slide(direction) {
    scrollAmount += direction * scrollStep;
    // Prevent scrolling past the start
    if (scrollAmount < 0) scrollAmount = 0;
    // Prevent scrolling past the end
    if (scrollAmount > slider.scrollWidth - slider.clientWidth) {
        scrollAmount = slider.scrollWidth - slider.clientWidth;
    }
    gsap.to(slider, {
        x: -scrollAmount,
        duration: 0.5,
        ease: "power2.out"
    });
}

// Initialize the box content and background
preloadImages();
updateBoxContent();
changeBackground();

// Automatically change content every 3 seconds
setInterval(() => {
    changeContent(1); // Move to the next content
}, 3000);

// Event listeners for manual navigation
document.querySelector('.slider1').addEventListener('click', () => changeContent(-1));
document.querySelector('.slider2').addEventListener('click', () => changeContent(1));

// Event listeners for slider arrows
document.querySelector('.slider-arrow.left').addEventListener('click', () => slide(-1));
document.querySelector('.slider-arrow.right').addEventListener('click', () => slide(1));