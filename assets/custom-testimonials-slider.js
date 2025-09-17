// initialize slideshow
const slideshow_container = document.querySelector('.testimonial-slider');

const slider = new Flickity( slideshow_container, {
    autoplay: false,
    cellAlign: 'left',
    contain: true,
    pageDots: false,
    wrapAround: true,
    pauseAutoPlayOnHover: false,
});

// config:
// assume there is just one single slider on the page
// navigation dots should be disabled
// no autoplay
// infinite loop
// the slides or cells should be aligned to the left side on initialization.
// pauseAutoPlayOnHover: false
