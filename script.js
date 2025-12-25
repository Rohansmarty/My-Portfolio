// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menu-btn');
    const menu = document.querySelector('.menu');
    
    if (menuBtn) {
        menuBtn.addEventListener('change', function() {
            if (this.checked) {
                menu.style.maxHeight = '500px';
            } else {
                menu.style.maxHeight = '0';
            }
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '#!') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    // Close mobile menu if open
                    if (menuBtn && menuBtn.checked) {
                        menuBtn.checked = false;
                        menu.style.maxHeight = '0';
                    }
                }
            }
        });
    });

    // Scroll to Top Button
    const scrollToTopBtn = document.getElementById('scrollToTop');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideMenu = menu.contains(event.target);
        const isClickOnMenuBtn = menuBtn && (menuBtn.contains(event.target) || event.target === menuBtn);
        
        if (!isClickInsideMenu && !isClickOnMenuBtn && menuBtn && menuBtn.checked) {
            menuBtn.checked = false;
            menu.style.maxHeight = '0';
        }
    });
});
