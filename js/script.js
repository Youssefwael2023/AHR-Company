// JavaScript for Slider Functionality
const slider = document.querySelector('.slider');
let scrollAmount = 0;
const scrollStep = 315; // Width of image + margin

function slide(direction) {
    scrollAmount += direction * scrollStep;
    // Prevent scrolling past the start
    if (scrollAmount < 0) scrollAmount = 0;
    // Prevent scrolling past the end
    if (scrollAmount > slider.scrollWidth - slider.clientWidth) {
        scrollAmount = slider.scrollWidth - slider.clientWidth;
    }
    slider.style.transform = `translateX(-${scrollAmount}px)`;
}
const contentArray = [
    { title: "About Us", content: "Welcome to AHR Facility Management, where we are redefining operational excellence and sustainability in the industry. We deliver seamless, efficient, and innovative solutions through a unified management system tailored to meet your unique needs Our approach is powered by cutting-edge technologies, including IoT, AI, and advanced analytics, enabling us to optimize operations, reduce costs, and enhance the value of your assets." },
    { title: "Our Vision", content: "To deliver unparalleled operational excellence through integrated facility management services, transforming client operations and elevating industry standards." },
    { title: "Our Mission", content: "We leverage IoT, AI, and advanced technologies to optimize operations, reduce costs, and improve service quality. Our commitment to sustainability and tailored client solutions ensures top-tier service delivery." }
];

let currentIndex = 0;

// Function to update the box content
function updateBoxContent() {
    document.getElementById('box-title').textContent = contentArray[currentIndex].title;
    document.getElementById('box-content').textContent = contentArray[currentIndex].content;
}

// Function to change content based on slider click or timer
function changeContent(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = contentArray.length - 1;
    } else if (currentIndex >= contentArray.length) {
        currentIndex = 0;
    }
    updateBoxContent();
}

// Initialize the box content
updateBoxContent();

// Automatically change content every 1 second
setInterval(() => {
    changeContent(1); // Move to the next content
}, 3000); 