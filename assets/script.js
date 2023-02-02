const imgSrcArray = [
    'url(./images/IMAGE_1.png)',
    'url(./images/IMAGE_2.png)',
    'url(./images/IMAGE_3.png)',
    'url(./images/image.jpg)',
    'url(./images/pin1.png)',
    'url(./images/pin2.png)',
    'url(./images/pin3.png)',
    'url(./images/Slides-about-company-01.jpg)',
    'url(./images/Slides-about-company-02.jpg)',
    'url(./images/Slides-about-company-03-1.jpg)',
    'url(./images/Slides-about-company-04.jpg)',
];

const button = document.querySelector("button");
const div = document.querySelector("div");

function generateRandomImage() {
    let iteration = Math.floor(Math.random() * imgSrcArray.length);
    div.style.backgroundImage = imgSrcArray[iteration];
};
