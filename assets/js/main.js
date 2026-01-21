/* Florida Mobility Scooters - Main JavaScript */

document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile Menu Toggle
    const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
    const navMenu = document.querySelector('nav ul');
    
    if (mobileMenuIcon && navMenu) {
        mobileMenuIcon.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    // Accordion Functionality for Affiliate CTAs
    const accordionHeaders = document.querySelectorAll('.cta-accordion-header');
    
    accordionHeaders.forEach(function(header) {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const isActive = this.classList.contains('active');
            
            // Close all accordions first
            document.querySelectorAll('.cta-accordion-header').forEach(function(h) {
                h.classList.remove('active');
            });
            document.querySelectorAll('.cta-accordion-content').forEach(function(c) {
                c.classList.remove('active');
            });
            
            // Toggle current accordion
            if (!isActive) {
                this.classList.add('active');
                content.classList.add('active');
            }
        });
    });
    
    // Click-to-Reveal Pricing Buttons
    const pricingBtns = document.querySelectorAll('.pricing-reveal-btn');
    
    pricingBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            const container = this.closest('.pricing-reveal-container');
            const content = container.querySelector('.pricing-reveal-content');
            
            if (content) {
                content.classList.toggle('active');
                
                // Update button text
                const btnText = this.querySelector('.btn-text');
                if (btnText) {
                    if (content.classList.contains('active')) {
                        btnText.textContent = 'Hide Options';
                    } else {
                        btnText.textContent = btnText.getAttribute('data-original') || 'Check Pricing & Availability';
                    }
                }
            }
        });
    });
    
    // Store original button text
    document.querySelectorAll('.pricing-reveal-btn .btn-text').forEach(function(btnText) {
        btnText.setAttribute('data-original', btnText.textContent);
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
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
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (navMenu && navMenu.classList.contains('active')) {
            if (!navMenu.contains(e.target) && !mobileMenuIcon.contains(e.target)) {
                navMenu.classList.remove('active');
            }
        }
    });
    
    // Obfuscated link handler
    document.querySelectorAll('[data-dest]').forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            var d = this.getAttribute('data-dest');
            if (d) {
                var u = atob(d);
                window.open(u, '_blank', 'noopener');
            }
        });
    });
    
});
