window.addEventListener('load', () => {
    const loader = document.querySelector('.loader-container');
    const loader2 = document.querySelector('.loader');
    
    if (loader) {
        gsap.to(loader, {
         
          
            duration: .95,
            ease: "power2.inOut",
            onComplete: () => {
                gsap.to(loader2, {
                    opacity: 0, 
                    duration: .25, 
                    ease: "power2.inOut", 
                    onComplete: () => {
                        gsap.to(loader, {
                            width: 0, 
                            duration: .25, 
                            ease: "power2.inOut", 
                            onComplete: () => {
                                loader.remove();
                                document.body.style.overflow = 'auto';
                            }
                        });
                    }
                });
            }
        });
    }
});
