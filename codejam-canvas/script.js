import bigArr from './assets/bigArray.js';
import smallArr from "./assets/smallArray.js";
for (let i = 0; i < bigArr.length; i++) {
    for (let j = 0; j < bigArr[i].length; j++) {
        console.log(`Элемент ряда ${i} ячейки ${j} равна ${bigArr[i][j]}`);
    }
}

console.log('***************************************************');

for (let i = 0; i < smallArr.length; i++) {
    for (let j = 0; j < smallArr[i].length; j++) {
        console.log(`Элемент ряда ${i} ячейки ${j} равна ${smallArr[i][j]}`);
    }
}
