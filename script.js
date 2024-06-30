document.addEventListener('DOMContentLoaded', () => {
    // Form Validation
    const form = document.getElementById('contactForm');
    const formFeedback = document.getElementById('formFeedback');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            formFeedback.textContent = 'All fields are required.';
            formFeedback.style.color = 'red';
            return;
        }

        if (!validateEmail(email)) {
            formFeedback.textContent = 'Invalid email address.';
            formFeedback.style.color = 'red';
            return;
        }

        formFeedback.textContent = 'Form submitted successfully!';
        formFeedback.style.color = 'green';
        form.reset();
    });

    // Email Validation Function
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Dynamic Content Loading
    const dynamicContentButton = document.getElementById('dynamicContentButton');
    const dynamicContent = document.getElementById('dynamicContent');

    dynamicContentButton.addEventListener('click', () => {
        dynamicContent.innerHTML = '<p>This is dynamically loaded content.</p>';
    });

    // Interactive Menu
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = event.target.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });

            navLinks.forEach(link => link.classList.remove('active'));
            event.target.classList.add('active');
        });
    });
});
