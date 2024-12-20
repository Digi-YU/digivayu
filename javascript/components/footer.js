class Footer {
    constructor() {
        this.template = `
            <footer class="footer py-5">
                <div class="container ">
                    <div class="row g-4 col-11 col-lg-10 mx-auto">
                        <div class="col-lg-4 col-md-6">
                            <div class="footer-content">
                                <div class="logo mb-4 footer-logo">
                                    <img src="assets/image/png/logo.png" alt="DigiVayu" class="img-fluid">
                                </div>
                                <p class="mb-4 footer-description col-12 col-lg-11">We help eCommerce DTC Inventory & Dropshipping Brands to shortcut their growth curve and become leaders in performance marketing.</p>
                                <div class="social-links d-flex gap-3">
                                    <a href="#" target="_blank"><i class="fab fa-facebook-f"></i></a>
                                    <a href="#" target="_blank"><i class="fab fa-instagram"></i></a>
                                    <a href="#" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-6">
                            <div class="footer-links">
                                <h4 class="mb-4">Quick Links</h4>
                                <ul>
                                    <li><a href="index.html">Home</a></li>
                                    <li><a href="about.html">About Us</a></li>
                                    <li><a href="index.html#services">Services</a></li>
                                    <li><a href="#">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="footer-links">
                                <h4 class="mb-4">Services</h4>
                                <ul>
                                    <li><a href="#">Meta Ads</a></li>
                                    <li><a href="#">Google Ads</a></li>
                                    <li><a href="#">LinkedIn Ads</a></li>
                                    <li><a href="#">Web Development</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="footer-contact">
                                <h4 class="mb-4">Contact Info</h4>
                                <ul>
                                    <li>
                                        <i class="fas fa-envelope"></i>
                                        <a href="mailto:hello@digivayu.com">hello@digivayu.com</a>
                                    </li>
                                    <li>
                                        <i class="fas fa-phone"></i>
                                        <a href="tel:+1234567890">+1 (234) 567-890</a>
                                    </li>
                                    <li>
                                        <i class="fas fa-location-dot"></i>
                                        <a href="#">1234, Main Street, City, Country</a>
                                    </li>
                                   
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="footer-bottom text-center mt-5 pt-4">
                        <p>&copy; ${new Date().getFullYear()} DigiVayu. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        `;
    }

    render(containerId) {
        const container = document.getElementById(containerId);
        if (container) {
            container.innerHTML = this.template;
        }
    }
}

// Initialize footer
document.addEventListener('DOMContentLoaded', () => {
    const footer = new Footer();
    footer.render('footer-container');
});

export default Footer; 