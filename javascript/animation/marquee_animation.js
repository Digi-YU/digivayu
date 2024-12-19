const marquee = document.querySelectorAll('.marquee');

// Create animation timeline
const animation = gsap.timeline({
    repeat: -1,
    defaults: {
        ease: "none"
    }
});

// Set initial position
gsap.set(marquee, {
    x: "0%"
});

// Animate
animation.to(marquee, {
    x: "-100%", 
    duration: 15,
    ease: "none"
});

// Add hover pause effect
marquee.addEventListener('mouseenter', () => {
    gsap.to(animation, {
        timeScale: 0,
        duration: 0.5
    });
});

marquee.addEventListener('mouseleave', () => {
    gsap.to(animation, {
        timeScale: 1,
        duration: 0.5
    });
});
