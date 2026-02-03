// Portfolio Site JavaScript
// Add any custom JavaScript functionality here

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Add active class to current nav item based on current page
    const currentLocation = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentLocation.split('/').pop()) {
            link.classList.add('active');
        }
    });

    // Optional: Add a simple console log to confirm GTM setup
    // You can expand this for debugging your analytics implementation
    console.log('Portfolio site loaded. Ready for GTM integration.');
});

// Example function for tracking custom events via dataLayer
// Uncomment and customize as needed for your analytics setup
/*
function trackEvent(eventName, eventData = {}) {
    if (window.dataLayer) {
        window.dataLayer.push({
            'event': eventName,
            ...eventData
        });
        console.log('Event tracked:', eventName, eventData);
    }
}

// Example usage:
// trackEvent('project_click', { project_name: 'Project Alpha' });
*/
