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

const imageGenerationSection = document.querySelectorAll(".image-generator");

imageGenerationSection.forEach(imageGenerationSection => {
    const button = imageGenerationSection.querySelector(".image-generator__button");
    const imageContainer = imageGenerationSection.querySelector(".image-generator__image-container");

    button.addEventListener("click", () => generateRandomImage(imageContainer));
});

function generateRandomImage(imageContainer) {
    const iteration = Math.floor(Math.random() * imgSrcArray.length);
    imageContainer.style.backgroundImage = imgSrcArray[iteration];
};
