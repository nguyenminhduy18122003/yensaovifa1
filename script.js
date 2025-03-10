document.addEventListener('DOMContentLoaded', function() {
    'use strict';
    
    // Header Sticky
    window.addEventListener('scroll', function() {
        const header = document.getElementById('header');
        if (window.scrollY > 100) {
            header.style.padding = '10px 0';
        } else {
            header.style.padding = '20px 0';
        }
    });

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const body = document.querySelector('body');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            if (mainNav.style.display === 'block') {
                mainNav.style.display = 'none';
                body.style.overflow = 'auto';
                this.innerHTML = '<i class="fas fa-bars"></i>';
            } else {
                mainNav.style.display = 'block';
                body.style.overflow = 'hidden';
                this.innerHTML = '<i class="fas fa-times"></i>';
            }
        });
        
        // Close mobile menu when clicking on a menu link
        const navLinks = document.querySelectorAll('.main-nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    mainNav.style.display = 'none';
                    body.style.overflow = 'auto';
                    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
                }
            });
        });
    }

    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            faqItem.classList.toggle('active');
        });
    });

    // Testimonial Slider
    let currentSlide = 0;
    const testimonialItems = document.querySelectorAll('.testimonial-item');
    const totalSlides = testimonialItems.length;
    
    if(testimonialItems.length > 0) {
        // Hide all slides except the first one
        testimonialItems.forEach((item, index) => {
            if(index !== 0) {
                item.style.display = 'none';
            }
        });
        
        // Previous button click
        document.querySelector('.prev-btn').addEventListener('click', () => {
            testimonialItems[currentSlide].style.display = 'none';
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            testimonialItems[currentSlide].style.display = 'block';
        });
        
        // Next button click
        document.querySelector('.next-btn').addEventListener('click', () => {
            testimonialItems[currentSlide].style.display = 'none';
            currentSlide = (currentSlide + 1) % totalSlides;
            testimonialItems[currentSlide].style.display = 'block';
        });
    }

    // Form Submission
    const orderForm = document.getElementById('orderForm');
    if(orderForm) {
        orderForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Here you would typically send the form data to a server
            alert('Cảm ơn bạn đã gửi thông tin! Chúng tôi sẽ liên hệ với bạn sớm nhất.');
            this.reset();
        });
    }

    // Back to Top Button
    const backToTopButton = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });
    
    backToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Smooth scrolling for in-page links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});