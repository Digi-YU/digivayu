class Footer {
    constructor() {
        this.template = `
            <footer class="footer py-5">
                <div class="container ">
                    <div class="row g-4 col-11 col-lg-12 mx-auto">
                        <div class="col-lg-4 col-md-6">
                            <div class="footer-content">
                                <div class="logo mb-4 footer-logo">
                                    <img src="assets/image/png/logo.png" alt="DigiVayu" class="img-fluid">
                                </div>
                                <p class="mb-4 footer-description col-12 col-lg-11">We help businesses achieve their goals through strategic digital marketing solutions that drive growth and maximize ROI.</p>
                                <div class="social-links d-flex gap-3">
                                    <a href="https://www.facebook.com/profile.php?id=61570395294320" target="_blank"><i class="fab fa-facebook-f"></i></a>
                                    <a href="https://www.instagram.com/digivayu24/?next=%2F&hl=en" target="_blank"><i class="fab fa-instagram"></i></a>
                                    <a href="https://wa.me/+917397979898" target="_blank"><i class="fab fa-whatsapp"></i></a>
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
                                    <li><a href="contact.html">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-6">
                            <div class="footer-links">
                                <h4 class="mb-4">Services</h4>
                                <ul>
                                    <li><a href="index.html#meta-ads">Meta Ads</a></li>
                                    <li><a href="index.html#google-ads">Google Ads</a></li>
                                    <li><a href="index.html#linkedin-ads">LinkedIn Ads</a></li>
                                    <li><a href="index.html#web-development">Web Development</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="footer-contact">
                                <h4 class="mb-4">Contact Info</h4>
                                <ul>
                                    <li>
                                        <i class="fas fa-envelope col-1"></i>
                                        <a href="mailto:contact@digivayu.in" class="col-10">contact@digivayu.in</a>
                                    </li>
                                    <li>
                                        <i class="fas fa-phone col-1"></i>
                                        <a href="tel:+917397979898" class="col-10">+91 7397 979 898</a>
                                    </li>
                                    <li class="d-flex align-items-start">
                                        <i class="fas fa-location-dot col-1"></i>
                                        <a href="https://maps.app.goo.gl/34567890" class="col-10">
                                            <address>Office No 63 ,6th floor, Business Bay JITO Centre, Dharma Rpd Estate, Mumbai Naka, Matoshree Nagar, Nashik, Maharashtra 422002</address>
                                        </a>
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