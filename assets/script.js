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

const page = document.querySelector(".page");

page.addEventListener("click", handleClick)

function handleClick(e) {
    const imageGenerationButton = e.target.closest(".image-generator__button");

    if (!imageGenerationButton) return;

    generateRandomImage(e);
}

function generateRandomImage(e) {
    const imageGenerationSection = e.target.closest(".page__image-generator");

    if (!imageGenerationSection) return;

    const imageContainer = imageGenerationSection.querySelector(".image-generator__image-container");
    const iteration = Math.floor(Math.random() * imgSrcArray.length);

    imageContainer.style.backgroundImage = imgSrcArray[iteration];
};
