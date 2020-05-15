const sections = document.querySelectorAll('section');
const bubble = document.querySelector('.bubble');
const gradients = [
    "linear-gradient(to right, #c31432, #240b36)",
    "linear-gradient(to right, #0F2027, #203A43, #2C5364)",
    "linear-gradient(to right, #667db6, #0082c8, #2C5364, #667db6)",
    "linear-gradient(to right, #159957, #155799)"];

const options = {
    threshold: 0.7
};

let observer = new IntersectionObserver(navCheck, options);  // Funtion to check the change in sections

function navCheck(entries) {
    entries.forEach(entry => {
        const className = entry.target.className;
        const activeAnchor = document.querySelector(`[data-page=${className}]`);
        const gradientIndex = entry.target.getAttribute('data-index');
        const coords = activeAnchor.getBoundingClientRect();
        const directions = {
            height: coords.height,
            width: coords.width,
            left:coords.left,
            top:coords.top
        };
        if(entry.isIntersecting) {
            bubble.style.setProperty('left', `${directions.left}px`);
            bubble.style.setProperty('top', `${directions.top}px`);
            bubble.style.setProperty('width', `${directions.width}px`);
            bubble.style.setProperty('height', `${directions.height}px`);
            bubble.style.background = gradients[gradientIndex];
        }
    });
}

sections.forEach(section => {
    observer.observe(section);
});