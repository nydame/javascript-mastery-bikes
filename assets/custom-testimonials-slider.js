// initialize slideshows
const options = {
	cellAlign: "left",
	wrapAround: true,
	autoPlay: false,
	pageDots: false,
	fullscreen: true,
	pauseAutoPlayOnHover: false
};
const carousels = document.querySelectorAll(".testimonial-slider");
carousels.forEach((carousel, index) => {
	initiateSlider(carousel, options);
});

function initiateSlider(elem, op) {
	const flkty = new Flickity(elem, op);
}


// config:
// assume there is just one single slider on the page NOW DROP ASSUMTION
// navigation dots should be disabled
// no autoplay
// infinite loop
// the slides or cells should be aligned to the left side on initialization.
// pauseAutoPlayOnHover: false
