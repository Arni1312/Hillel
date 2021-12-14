"use strict";
// 1) Реализовать функцию, которая принимает текст, и возвращает массив объектов со структурой

//  { word: 'smth', length: 1, isCapitalized: false}

let str = prompt("Введите текст");
let arrStr = str.split(" ");
function initialIsCapital(word) {
  return word[0] !== word[0].toLowerCase();
}
function resultFunc(word) {
  let result = arrStr.map((item) => {
    if (item === "") {
      return;
    }
    return {
      word: item,
      length: item.length,
      isCapitalised: initialIsCapital(item),
    };
  });
  console.log(result);
}
resultFunc(arrStr);

// // 2) Реализовать функцию changeFour, которая копирует массив, у копии удаляет 4й элемент и заменяет его строкой 'JavaScript'

let array = [1, 2, 3, 4, 5];
console.log(array); // [1, 2, 3, 4, 5];
let result = changeFour(array);
function changeFour(arr) {
  return array.splice(3, 1, "JavaScript");
}
console.log(array); // [1, 2, 3, 'JavaScript', 5];

// // // 3) Реализовать функцию calcSum, которая вернет сумму элементов массива. Добавить в функцию проверку что значение число.

let sum1 = calcSum([]); // 0
let sum2 = calcSum([1, 2, 3]); // 6
let sum3 = calcSum([5, 0, 10, 1, 5, null, "some string"]); // 21
function calcSum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (isNaN(array[i]) == true) {
      continue;
    } else {
      sum += Number(array[i]);
    }
  }
  return sum;
}
console.log(sum1);
console.log(sum2);
console.log(sum3);
