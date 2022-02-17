const images = document.querySelector('img');

const options = { threshold: [.5] }

const io = new IntersectionObserver(
    (entries, io) => {
        entries.forEach(entry => {
        console.log(entries);
        });  
    }, options);


images.forEach(images => {
    io.observe(images);
});

