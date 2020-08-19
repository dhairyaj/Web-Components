function init() {

    const slides = document.querySelectorAll('.slide');
    const pages = document.querySelectorAll('.page');
    const backgrounds = [
        `radial-gradient(#2B3760, #0B1023)`,
        `radial-gradient(#4E4343, #161616)`,
        `radial-gradient(#BDC3C7, #2C3E50)`,
        `radial-gradient(#4E3022, #161616)`
    ];

    let current = 0;

    slides.forEach((slide, index) => {
        slide.addEventListener("click", function () {
            changeDots(this);
            nextSlide(index);
        });
    });

    function changeDots(dot) {
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        dot.classList.add('active');
    }

    function nextSlide(pageNumber) {
        const nextPage = pages[pageNumber];
        const currentPage = pages[current];

        const nextText = nextPage.querySelector(".text");
        const currentText = currentPage.querySelector(".text");
        const container = document.querySelector(".container");

        // const tl = new TimelineMax();
        const tl = gsap.timeline();

        console.log(pageNumber);
        tl.to(container, 0.3, { backgroundImage: backgrounds[pageNumber] })
        .fromTo(currentPage, 0.3, { opacity: 1 }, {opacity: 0 })
        .fromTo(nextPage, 0.3, { opacity: 0 }, {opacity: 1 });
        // .fromTo(currentText, 0.3, { opacity: 1 }, {opacity: 0 })
        // .fromTo(nextPage, 0.3, { opacity: 0 }, {opacity: 1 });

        current = pageNumber;

    }

}

init();