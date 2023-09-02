// cursor-highlight
document.addEventListener('DOMContentLoaded', function () {
    const cursorHighlight = document.querySelector('.cursor-highlight');

    let scr = 0;

    window.onscroll = () => {
        const scrollY = window.scrollY;
        const position = 0;
    
        if (scrollY > position) {
            cursorHighlight.style.position = "fixed";
        }
    };

    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY + scr;

        // Use CSS transitions for smoother animation
        cursorHighlight.style.transition = 'transform 0.1s ease-out';
        cursorHighlight.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    });
});