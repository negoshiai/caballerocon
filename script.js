document.addEventListener('DOMContentLoaded', function() {

    // 1. Initialize AOS (Animate on Scroll)
    // ----------------------------------------------------------------
    AOS.init({
        duration: 800,       // values from 0 to 3000, with step 50ms
        easing: 'ease-in-out', // default easing for AOS animations
        once: true,          // whether animation should happen only once - while scrolling down
        mirror: false,       // whether elements should animate out while scrolling past them
    });


    // 2. Sticky Header on Scroll
    // ----------------------------------------------------------------
    const header = document.getElementById('main-header');
    
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }


    // 3. Mobile Navigation (Hamburger Menu)
    // ----------------------------------------------------------------
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const mainNav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.main-nav a');

    if (hamburgerMenu && mainNav) {
        // Toggle menu on hamburger click
        hamburgerMenu.addEventListener('click', () => {
            mainNav.classList.toggle('is-active');
            hamburgerMenu.classList.toggle('is-active');

            // Optional: Prevent body scroll when menu is open
            if (mainNav.classList.contains('is-active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });

        // Close menu when a navigation link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (mainNav.classList.contains('is-active')) {
                    mainNav.classList.remove('is-active');
                    hamburgerMenu.classList.remove('is-active');
                    document.body.style.overflow = '';
                }
            });
        });
    }


    // 4. Smooth Scrolling for Anchor Links
    // This is handled by CSS `scroll-behavior: smooth;` but this is a JS fallback/enhancement
    // ----------------------------------------------------------------
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            // Prevent default only if it's a real anchor link on the page
            const targetId = this.getAttribute('href');
            if(targetId.length > 1 && document.querySelector(targetId)){
                 e.preventDefault();
                 document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

});
