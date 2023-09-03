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


// // typing-effect.js
// class TypingEffect {
//     constructor(element, textArray, speed, eraseDelay) {
//         this.element = element;
//         this.textArray = textArray;
//         this.speed = speed;
//         this.eraseDelay = eraseDelay;
//         this.currentIndex = 0;
//         this.isTyping = false;
//     }

//     async type() {
//         if (this.isTyping) return;
//         this.isTyping = true;
//         for (const text of this.textArray) {
//             await this.typeText(text);
//             await this.eraseText();
//         }
//         this.isTyping = false;
//     }

//     async typeText(text) {
//         for (const char of text) {
//             this.element.textContent += char;
//             await new Promise(resolve => setTimeout(resolve, this.speed));
//         }
//     }

//     async eraseText() {
//         await new Promise(resolve => setTimeout(resolve, this.eraseDelay));
//         const text = this.element.textContent;
//         while (text.length > 0) {
//             this.element.textContent = text.slice(0, -1);
//             await new Promise(resolve => setTimeout(resolve, 50));
//         }
//     }
// }

// // Example usage:
// const ele = document.querySelector('#type');
// const textArray = ['Want to learn Coding?', 'Want to learn '];
// const typingEffect = new TypingEffect(ele, textArray, 50, 30);
// typingEffect.type();

