const images = document.querySelectorAll('.colorLine')
const rightLines = document.querySelector('.rightAside')
const rightImage = document.querySelector('.rightImage');


rightImage.addEventListener('mouseover', () => {
    console.log(rightLines);
})
console.log(images, typeof (images));
// console.log(horizontalLine, typeof (horizontalLine))
// console.log(images[0]);
// images[0].forEach((image) => {
//     image.addEventListener('mouseover', () => {
//         console.log(image)

//         // image[0].style.backgroundColor = 'blue';

//     })
// })

