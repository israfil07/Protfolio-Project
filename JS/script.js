// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Get all nav links
    const navLinks = document.querySelectorAll('.nav-link');

    // Define the page URLs
    const pages = {
        'Home': 'index.html',
        'Blog': 'blog.html',
        'Project': 'project.html',
        'About': 'about.html'
    };

    // Set the href attributes for each nav link
    navLinks.forEach(link => {
        const linkText = link.textContent.trim();
        if (pages[linkText]) {
            link.setAttribute('href', pages[linkText]);
        }
    });

    // Highlight the current page in navbar
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage) {
            link.classList.add('active');
        }
    });
});