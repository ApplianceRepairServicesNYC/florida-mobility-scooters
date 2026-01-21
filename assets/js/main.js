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
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (navMenu && navMenu.classList.contains('active')) {
            if (!navMenu.contains(e.target) && !mobileMenuIcon.contains(e.target)) {
                navMenu.classList.remove('active');
            }
        }
    });
    
    // Two-Click Affiliate System
    // Step 1: Click button to reveal the link
    // Step 2: Click revealed link to go to affiliate site
    
    document.querySelectorAll('.aff-trigger').forEach(function(btn) {
        btn.addEventListener('click', function() {
            var wrapper = this.closest('.aff-wrapper');
            var link = wrapper.querySelector('.aff-final');
            
            // Hide button, show link
            this.style.display = 'none';
            link.style.display = 'inline-block';
        });
    });
    
    document.querySelectorAll('.aff-final').forEach(function(link) {
        link.addEventListener('click', function(ev) {
            ev.preventDefault();
            // Build the URL only on click
            var a = 'https://';
            var b = 'mobility';
            var c = 'department';
            var d = '.com/';
            var q = '?aff=';
            var f = '66';
            window.open(a + b + c + d + q + f, '_blank');
        });
    });
    
});
