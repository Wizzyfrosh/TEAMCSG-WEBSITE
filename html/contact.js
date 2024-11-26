// Contact Form Validation and Submission
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.contact-form');
    const nameInput = form.querySelector('input[name="name"]');
    const emailInput = form.querySelector('input[name="email"]');
    const messageInput = form.querySelector('textarea[name="message"]');

    // Validate email format
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Display feedback message
    function displayFeedback(message, isError = false) {
        const feedback = document.createElement('div');
        feedback.textContent = message;
        feedback.className = isError ? 'feedback error' : 'feedback success';

        form.appendChild(feedback);

        // Remove feedback message after 3 seconds
        setTimeout(() => {
            feedback.remove();
        }, 3000);
    }

    // Handle form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent default form submission

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        // Check if all fields are filled
        if (!name || !email || !message) {
            displayFeedback('All fields are required.', true);
            return;
        }

        // Validate email format
        if (!isValidEmail(email)) {
            displayFeedback('Please enter a valid email address.', true);
            return;
        }

        // Simulate successful submission
        displayFeedback('Message sent successfully!');

        // Clear form fields
        form.reset();
    });
});
// Scroll to Top Button Functionality
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scroll effect
    });
}

// Show/Hide Scroll to Top Button on Scroll
window.onscroll = function() {
    const scrollTopBtn = document.getElementById('scroll-top-btn');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollTopBtn.style.display = 'block'; // Show button
    } else {
        scrollTopBtn.style.display = 'none'; // Hide button
    }
};

