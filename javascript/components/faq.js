class FAQ {
    constructor() {
        this.faqs = [
            {
                question: "What makes DigiVayu different from other agencies?",
                answer: "We're not just another agency - we're your growth partners. We focus exclusively on high-growth potential eCommerce brands, offering personalized strategies, multi-channel expertise, and proven scaling methods backed by real results."
            },
            {
                question: "What's your minimum ad spend requirement?",
                answer: "We typically work with brands spending a minimum of $5,000/month on advertising. This ensures we have enough budget to properly test and scale your campaigns across multiple channels."
            },
            {
                question: "How long does it take to see results?",
                answer: "While every brand is different, we typically see initial results within the first 30-60 days. Our 3-month testing period allows us to optimize and scale your campaigns effectively."
            },
            {
                question: "Do you work with both dropshipping and inventory brands?",
                answer: "Yes! We have extensive experience with both business models and understand the unique challenges and opportunities each presents."
            },
            {
                question: "What platforms do you work with?",
                answer: "We specialize in Meta (Facebook & Instagram), Google, TikTok, and LinkedIn advertising. We'll recommend the best platform mix based on your specific business goals and target audience."
            }
        ];
        
        this.template = this.createTemplate();
    }

    createTemplate() {
        const faqItems = this.faqs.map((faq, index) => `
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed d-flex gap-3 align-items-center" 
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target="#collapse${index}">
                              <div class="icon col-1" id="icon-${index}"><img src="assets/image/svg/play.svg" alt="tick"></div>
                                <div class=" col-10"> ${faq.question}</div>
                    </button>
                </h2>
                <div id="collapse${index}" 
                     class="accordion-collapse collapse" 
                     data-bs-parent="#faqAccordion">
                    <div class="accordion-body" id="answer-${index}">
                        ${faq.answer}
                    </div>
                </div>
            </div>
        `).join('');

        return `
            <div class="accordion col-lg-10 col-12" id="faqAccordion">
                ${faqItems}
            </div>
        `;
    }

    initAnimations() {
        this.faqs.forEach((_, index) => {
            const icon = document.querySelector(`#icon-${index}`);
            const collapseElement = document.querySelector(`#collapse${index}`);
            const answerBody = document.querySelector(`#answer-${index}`);

            // Set initial states
            gsap.set(answerBody, {
                scaleY: 0,
                opacity: 0,
                transformOrigin: "top left"
            });

            // Create GSAP timeline for icon rotation
            const iconTl = gsap.timeline({ paused: true });
            iconTl.to(icon, {
                rotation: 90,
                duration: 0.3,
                ease: "power2.inOut"
            });

            // Create GSAP timeline for answer animation
            const answerTl = gsap.timeline({ paused: true });
            answerTl
                .to(answerBody, {
                    scaleY: 1,
                    opacity: 1,
                    duration: 0.5,
                    ease: "power2.out"
                });

            // Listen for Bootstrap collapse events
            collapseElement.addEventListener('show.bs.collapse', () => {
                iconTl.play();
                answerTl.play();
            });

            collapseElement.addEventListener('hide.bs.collapse', () => {
                iconTl.reverse();
                answerTl.reverse();
            });
        });
    }

    render(containerId) {
        const container = document.getElementById(containerId);
        if (container) {
            container.innerHTML = this.template;
            this.initAnimations();
        }
    }
}

// Initialize FAQ
document.addEventListener('DOMContentLoaded', () => {
    const faq = new FAQ();
    faq.render('faqContainer');
});

export default FAQ; 