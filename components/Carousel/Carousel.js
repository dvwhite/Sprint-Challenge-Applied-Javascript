/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

let viewingSlide = 0;

/*
* A component representing a carousel
* @param {Array} imgSrc: The array of slide image sources
* @returns {object} carouselDiv: The content created by the component
*/
function Carousel(imgSrc) {
  
  // The outer div containing the carousel
  const carouselDiv = document.createElement('div');
  carouselDiv.classList.add('carousel');

  // The slides
  const slide = document.createElement('img');
  slide.src = imgSrc[0];
  slide.style.display = 'block';

  // The left directional button to view previous image
  const leftBtnDiv = document.createElement('div');
  leftBtnDiv.classList.add('left-button');
  leftBtnDiv.addEventListener('click', function() {
    viewingSlide -= 1;
    viewingSlide %= imgSrc.length;
    viewingSlide = viewingSlide < 0 ? (imgSrc.length - 1) : viewingSlide 
    // Go to the next slide
    slide.src = imgSrc[viewingSlide];
    slide.style.transition = 'all 0.5s fade';
  });

  // The right directional button to view the next image
  const rightBtnDiv = document.createElement('div');
  rightBtnDiv.classList.add('right-button');
  rightBtnDiv.addEventListener('click', function() {
    viewingSlide +=  1;
    viewingSlide %= imgSrc.length;
    // Go to the previous slide
    slide.src = imgSrc[viewingSlide];
    slide.style.transition = 'all 0.5s fade';
  });

  // Append children to parent nodes
  appendChildren([leftBtnDiv, slide, rightBtnDiv], carouselDiv);

  return carouselDiv;
}

const imageSources = [
  "./assets/carousel/mountains.jpeg",
  "./assets/carousel/computer.jpeg",
  "./assets/carousel/trees.jpeg",
  "./assets/carousel/turntable.jpeg"
];

const carousel = document.querySelector('.carousel-container');
carousel.appendChild(Carousel(imageSources));