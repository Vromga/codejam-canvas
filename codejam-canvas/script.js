import smallArr from "./assets/smallArray.js";
import bigArr from "./assets/bigArray.js";

let img = new Image();
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.imageSmoothingEnabled = false;

let canvasWH = 512;

canvas.setAttribute('width', canvasWH);
canvas.setAttribute('height', canvasWH);
img.onload = function () {
    ctx.drawImage(img, 0, 0, img.width * 2, img.height * 2);
};

img.src = './assets/img/image.png';

let resolution = document.querySelector('.resolution');

resolution.addEventListener('change', (event) => {
    switch (event.target.value) {
        case '4x4':
            drawPixel(smallArr);
            break;
        case '32x32':
            drawPixel(bigArr);
            break;
        case '256x256':
            ctx.drawImage(img, 0, 0, img.width * 2, img.height * 2);
            break;
    }
});

function drawPixel(arr) {
    let pixelWH = canvasWH / arr.length;
    let x = 0;
    let y = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (Array.isArray(arr[i][j])) {
                ctx.fillStyle = `rgba(${arr[i][j].join(',')})`;
            } else {
                ctx.fillStyle = `#${arr[i][j]}`;
            }
            ctx.fillRect(x, y, pixelWH, pixelWH);
            x += pixelWH;
        }
        y += pixelWH;
        x = 0;
    }
}

