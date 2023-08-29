// for fixed when scrolling web page
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY > 100) {
        document.querySelector('.headerContent').style.paddingTop = `60px`;
    } else {
        document.querySelector('.headerContent').style.paddingTop = `0px`;
    }
});

// cursor-highlight
document.addEventListener('DOMContentLoaded', function () {
    const cursorHighlight = document.querySelector('.cursor-highlight');

    let scr = 0;
    const scrollPositionElement = document.querySelector(".main");
    window.addEventListener("scroll", () => {
        // Get the number of pixels scrolled vertically
        const scrollY = window.scrollY;
        // Update the content of the span element with the scroll position
        scr = scrollY;
    });

    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY + scr;
        // Set the position of the cursor-highlight element
        cursorHighlight.style.left = `${mouseX}px`;
        cursorHighlight.style.top = `${mouseY}px`;
    });
});

