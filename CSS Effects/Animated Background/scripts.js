const squareColors = [
    '#cd7075',
    '#4a707a',
    '#e70105',
    '#d0fe2a',
    '#c03505',
    '#64605c'
]

function createSquares() {
    const section = document.querySelector('section');
    const square = document.createElement('span');

    var size = Math.random() * 50;

    square.style.width = 20 + size + 'px';
    square.style.height = 20 + size + 'px';
    square.style.top = Math.random() * innerHeight + 'px';
    square.style.left = Math.random() * innerWidth + 'px';

    const squareColor = squareColors[Math.floor(Math.random() * squareColors.length)];
    square.style.background = squareColor;

    section.appendChild(square);

        setTimeout(() => {
            square.remove()
        }, 3000)
}

setInterval(createSquares, 150)