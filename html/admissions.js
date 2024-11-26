// Admission Form Validation and Submission
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.admission-form');
    const submitBtn = document.querySelector('.submit-btn');

    // Form Input Fields
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const courseSelect = document.getElementById('course');

    // Validation function
    function validateForm() {
        let isValid = true;

        // Reset previous error messages
        const errorMessages = form.querySelectorAll('.error');
        errorMessages.forEach(msg => msg.remove());

        // Name Validation
        if (nameInput.value.trim() === '') {
            isValid = false;
            displayError(nameInput, 'Name is required');
        }

        // Email Validation
        if (!validateEmail(emailInput.value.trim())) {
            isValid = false;
            displayError(emailInput, 'Please enter a valid email address');
        }

        // Phone Validation
        if (!validatePhone(phoneInput.value.trim())) {
            isValid = false;
            displayError(phoneInput, 'Please enter a valid phone number');
        }

        // Course Validation
        if (courseSelect.value === '') {
            isValid = false;
            displayError(courseSelect, 'Please select a course');
        }

        return isValid;
    }

    // Display error message
    function displayError(inputField, message) {
        const errorElement = document.createElement('div');
        errorElement.classList.add('error');
        errorElement.style.color = '#ff4d4d';
        errorElement.style.fontSize = '0.9rem';
        errorElement.textContent = message;
        inputField.parentNode.appendChild(errorElement);
    }

    // Email Validation
    function validateEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return emailPattern.test(email);
    }

    // Phone Validation (Simple check)
    function validatePhone(phone) {
        const phonePattern = /^[0-9]{10}$/;
        return phonePattern.test(phone);
    }

    // Handle form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent actual form submission

        // Validate the form
        if (validateForm()) {
            // If valid, submit the form (or do something like sending the data)
            alert('Form submitted successfully!');
            form.reset(); // Reset form fields
        } else {
            alert('Please fill in all the required fields correctly.');
        }
    });

    // Enable/Disable Submit Button based on form validity
    form.addEventListener('input', () => {
        if (validateForm()) {
            submitBtn.disabled = false;
        } else {
            submitBtn.disabled = true;
        }
    });
});
