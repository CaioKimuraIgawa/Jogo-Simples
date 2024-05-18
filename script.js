const images = [
    { name: 'Carro', src: './imagens/carro.jpg' },
    { name: 'Moto', src: './imagens/moto.jpg' },
    { name: 'Avião', src: './imagens/aviao.avif' },
    { name: 'Bicicleta', src: './imagens/bicicleta.jpg' }
];

const instructionElement = document.getElementById('instruction');
const targetImageNameElement = document.getElementById('target-image-name');
const imagesContainer = document.getElementById('images-container');
const scoreDisplay = document.getElementById('score');
let score = 0;
let targetImage;

function setRandomTargetImage() {
    targetImage = images[Math.floor(Math.random() * images.length)];
    targetImageNameElement.textContent = targetImage.name;
}

function displayImages() {
    imagesContainer.innerHTML = '';
    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.src;
        imgElement.alt = image.name;
        imgElement.classList.add('image-item');
        imgElement.addEventListener('click', () => {
            if (image.name === targetImage.name) {
                score++;
                scoreDisplay.textContent = `Pontuação: ${score}`;
                setRandomTargetImage();
            }
        });
        imagesContainer.appendChild(imgElement);
    });
}

setRandomTargetImage();
displayImages();