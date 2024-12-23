import ContactForm from './contact.js';

class Navbar {
    constructor() {
        // Get current page path
        this.currentPage = window.location.pathname.split('/').pop() || 'index.html';
        
        this.template = `
            <div class="navbar w-100">
            <div class="container navbar-container w-100">
                <div class="logo">
                    <a href="index.html">
                        <img src="assets/image/png/logo.png" alt="DigiVayu">
                    </a>
                </div>
                <div class="nav-links d-none d-lg-flex justify-content-center align-items-center">
                    <ul>
                        <li><a href="index.html" class="${this.isActive('index.html', '')}">Home</a></li>
                        <li><a href="index.html#services" class="${this.isActive('services.html')}">Services</a></li>
                        <li><a href="about.html" class="${this.isActive('about.html')}">About Us</a></li>
                        
                        <li><a href="contact.html" class="${this.isActive('contact.html')}">Contact</a></li>
                    </ul>
                    <div>
                      <button class="animated-button btn-black">
                              <svg viewBox="0 0 24 24" class="arr-2" xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                                ></path>
                              </svg>
                              <span class="text">Book a Discovery Call</span>
                              <span class="circle"></span>
                              <svg viewBox="0 0 24 24" class="arr-1" xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                                ></path>
                              </svg>
                            </button>
                    </div>
                </div>
                <div class="d-flex d-lg-none justify-content-center align-items-center">
                    <button class="btn bar-btn" id="menuToggle"> 
                        <i class="fa-solid fa-bars"></i>
                    </button>
                </div>
            </div>
            <!-- Mobile Menu -->
            <div class="mobile-menu">
                <ul>
                    <li><a href="index.html" class="${this.isActive('index.html', '')}">Home</a></li>
                    <li><a href="index.html#services" class="${this.isActive('services.html')}">Services</a></li>
                    <li><a href="about.html" class="${this.isActive('about.html')}">About</a></li>
                    <li><a href="contact.html" class="${this.isActive('contact.html')}">Contact</a></li>
                </ul>
                <div class="mobile-cta d-flex justify-content-center align-items-center">
                <button class="animated-button btn-black">
                              <svg viewBox="0 0 24 24" class="arr-2" xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                                ></path>
                              </svg>
                              <span class="text">Book a Discovery Call</span>
                              <span class="circle"></span>
                              <svg viewBox="0 0 24 24" class="arr-1" xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                                ></path>
                              </svg>
                            </button>
                </div>
            </div>
            </div>
        `;
        this.contactForm = new ContactForm();
    }

    isActive(...pages) {
        return pages.includes(this.currentPage) ? 'active' : '';
    }

    render(containerId) {
        const container = document.getElementById(containerId);
        if (container) {
            container.innerHTML = this.template;
            this.initMobileMenu();
            this.initContactForm();
        }
    }

    initMobileMenu() {
        const menuToggle = document.getElementById('menuToggle');
        const mobileMenu = document.querySelector('.mobile-menu');
        const navbar = document.querySelector('.navbar');

        let isOpen = false;

        // Create GSAP timeline for menu animation
        const menuTl = gsap.timeline({ paused: true });
        
        // Set initial state
        gsap.set(mobileMenu, {
            yPercent: -100,
            opacity: 0,
            scaleY: 0.75,
            visibility: 'hidden'
        });

        // Build animation timeline
        menuTl
            .to(mobileMenu, {
                yPercent: 0,
                opacity: 1,
                scaleY: 1,
                visibility: 'visible',
                duration: 0.5,
                ease: 'sine.inOut'
            });

        menuToggle.addEventListener('click', () => {
            isOpen = !isOpen;
            
            // Toggle icon
            menuToggle.querySelector('i').classList.toggle('fa-bars');
            menuToggle.querySelector('i').classList.toggle('fa-xmark');
            navbar.classList.toggle('menu-open');

            // Play or reverse animation
            if (isOpen) {
                menuTl.play();
            } else {
                menuTl.reverse();
            }
        });
    }

    initContactForm() {
        this.contactForm.init();
        
        // Add click handlers for both desktop and mobile CTA buttons
        const ctaButtons = document.querySelectorAll('.btn-black');
        ctaButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.contactForm.show();
            });
        });
    }
}

// Initialize navbar
document.addEventListener('DOMContentLoaded', () => {
    const navbar = new Navbar();
    navbar.render('nav-container');
});
