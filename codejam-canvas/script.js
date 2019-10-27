//import bigArr from './assets/bigArray.js';
import smallArr from "./assets/smallArray.js";

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let canvasWH = 512;

canvas.setAttribute('width', canvasWH);
canvas.setAttribute('height', canvasWH);

function drawPixel(arr) {
    let pixelWH = canvasWH / arr.length;
    let x = 0;
    let y = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            ctx.fillStyle = `#${arr[i][j]}`;
            ctx.fillRect(x, y, pixelWH, pixelWH);
            x += pixelWH;
        }
        y += pixelWH;
        x = 0;
    }
}

drawPixel(smallArr);
