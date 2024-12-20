class ContactForm {
    constructor() {
        this.template = `
            <div class="contact-overlay">
                <div class="contact-form">
                    <div class="form-header d-flex justify-content-between align-items-center mb-4">
                        <h3 class="font-display fw-bold m-0">Book a Discovery Call</h3>
                        <button class="close-btn" id="closeContact">
                            <i class="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                    <form id="discoveryForm">
                        <div class="form-group mb-3">
                            <label for="name">Full Name</label> 
                            <input type="text" id="name" class="form-control" required placeholder="e.g. John Smith">
                        </div>
                        <div class="form-group mb-3">
                            <label for="contact-number">Contact Number</label>
                            <input type="tel" id="contact-number" class="form-control" pattern="[0-9]*" maxlength="10" inputmode="numeric" onkeypress="return event.charCode >= 48 && event.charCode <= 57" placeholder="e.g. 1234567890">
                        </div>
                        <div class="form-group mb-3">
                            <label for="email">Email</label>
                            <input type="email" id="email" class="form-control" required placeholder="e.g. john@example.com">
                        </div>
                        
                        <div class="form-group mb-4">
                            <label for="message">Tell us about your business</label>
                            <textarea id="message" class="form-control" rows="4" required placeholder="e.g. We are an e-commerce business selling handmade jewelry. Looking to scale our Facebook ads and improve ROAS."></textarea>
                        </div>
                        <button type="submit" class="btn-gradient w-100">Submit</button>
                    </form>
                </div>
            </div>
        `;
    }

    init() {
        // Add form to body
        document.body.insertAdjacentHTML('beforeend', this.template);
        
        // Get elements
        this.overlay = document.querySelector('.contact-overlay');
        this.form = document.querySelector('.contact-form');
        
        // Set initial state
        gsap.set(this.overlay, { 
            display: 'none',
            opacity: 0 
        });
        gsap.set(this.form, { 
            y: 50,
            opacity: 0 
        });

        // Add event listeners
        this.addEventListeners();
    }

    show() {
        const tl = gsap.timeline();
        
        gsap.set(this.overlay, { display: 'flex' });
        
        tl.to(this.overlay, {
            opacity: 1,
            duration: 0.3
        })
        .to(this.form, {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: 'power2.out'
        });
    }

    hide() {
        const tl = gsap.timeline();
        
        tl.to(this.form, {
            y: 50,
            opacity: 0,
            duration: 0.3
        })
        .to(this.overlay, {
            opacity: 0,
            duration: 0.3,
            onComplete: () => {
                gsap.set(this.overlay, { display: 'none' });
            }
        });
    }

    addEventListeners() {
        // Close button
        document.getElementById('closeContact').addEventListener('click', () => this.hide());
        
        // Close on overlay click
        this.overlay.addEventListener('click', (e) => {
            if (e.target === this.overlay) this.hide();
        });

        // Form submission
        document.getElementById('discoveryForm').addEventListener('submit', (e) => {
            e.preventDefault();
            // Add your form submission logic here
            this.hide();
        });
    }
}

export default ContactForm; 