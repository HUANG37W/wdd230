// const images = document.querySelector('img');

// const options = { threshold: [.5] }

// const io = new IntersectionObserver(
//     (entries, io) => {
//         entries.forEach(entry => {
//         console.log(entries);
//         });  
//     }, options);


// images.forEach(images => {
//     io.observe(images);
// });

let imagesToLoad = document.querySelectorAll('img[data-src]');
const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};


imagesToLoad.forEach((img) => {
    loadImages(img);
  });