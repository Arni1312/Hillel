"use strict";

// Задачи 7 и 8 со звездочкой - они опциональные, но настоятельно рекомендованные к выполнению.



// 1) Напишите функцию fillArray, которая создает массив и заполняет его предоставленным значением.

// где 3 - это длина массива, а 'qwerty' его значения

function fillArray(number, value) {
  return new Array(number).fill(value);
}
let array = fillArray(3, 'qwerty');
console.log(array);

// 2) Напишите функцию reverseArray, которая разворачивает значения массива задом наперед.

let array1 = ['My', 'life', '-', 'my', 'rules'];
function reverseArray(arr){
  return arr.reverse()
}
console.log(reverseArray(array1))


// 3) Напишите функцию filterArray, которая очищает массив от нежелательных значений (false, undefined, '', 0, null).
// let result = filterArray(array); // [1,2, 'qwerty'];

let array2 = [0, 1, 2, null, undefined, 'qwerty', false];
function filterArray(arr){
  let filterArr= arr.filter(Boolean)
  return filterArr
}
console.log(filterArray(array2))

// 4) Напишите функцию changeFour, которая удаляет 4й элемент массива и заменяет его строкой 'JavaScript'

let array3 = [1, 2, 3, 4, 5];
function changeFour(arr){
arr.splice(3,1,'JavaScript')
return arr
}
console.log(changeFour(array3))

// 5) Напишите функцию formatArray, которая преобразует массив в строку через заданный входящий символ.
// let result = formatArray(array, '%'); // 1%2%3%4%5

let array4 = [1, 2, 3, 4, 5];
function formatArray(arr){
  let formatArr = arr.join(`%`)
  return formatArr
}
console.log(formatArray(array4))

// 6) Напишите функцию joinStr, которая возвращает строку, состоящую из всех строк входящих параметров через запятую.

let sum1 = joinStr(0); // ''
let sum2 = joinStr(1,'hello',3, 'world'); // 'hello,world'
let sum3 = joinStr('g','o', 0, 'o', null, 'd', {}); // 'g,o,o,d'

function joinStr(){
  const arr = [...arguments]; 
  let newArr = arr.filter(word => typeof(word)===`string`).join(`,`);
  return newArr
}
console.log(`'${sum1}'`)
console.log(`'${sum2}'`)
console.log(`'${sum3}'`)


// 7)* Напишите функцию advancedFillArray, которая создает массив и заполняет ее случайными значениями чисел из представленного диапазона. (Логику создания случайного числа обернуть в функцию setRandomValue(min, max)).

// let array  = advancedFillArray(10, 1, 15),
// где 10 - это длина массива, 1 - это min значение, 15 - это max значение.

// tips: тут вам функция fillArray поможет сократить код и создать массив, а метод массива map изменить значения массива на рандомные.

function advancedFillArray(length, min, max) {
    let randomArray = fillArray(length, setRandomValue(min, max));
    return randomArray.map(setRandomValue);
};
function setRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};

console.log(advancedFillArray(10, 1, 15))

// 8)* Напишите функцию changeArray, которая каждый элемент входящего массива умножает на 8, а возвращает только истинные значения (которые не равны NaN после результата умножения).

// tips: тут вам функция filterArray поможет отфильтровать значения.



// upd. Напишите функцию maxValue, которая для непустого массива возвращает его максимальное число.

// upd.upd. Обновите функцию changeArray так, чтобы значения массивов, которые начинаются с чисел, но содержат в себе символы тоже давали истинные значения при умножении на 8.

let arr1 = [1, 2, false, {}, undefined, '123', 'true'];
let res1 = changeArray(arr1); // 8, 16, 984
let max1 = maxValue(res1); // 984

let arr2 = [1, 2, false, '3px', '13.3%', '123', 'true'];
let res2 = changeArray(arr2); // 8, 16, 24, 106.4, 984
let max2 = maxValue(res2); // 984


function changeArray(arr) {
    let parseArray = arr.map(numStr => parseFloat(numStr));
    return filterArray(parseArray.map(function(x) { return x * 8; }));
}
function maxValue(arr) {
    return Math.max.apply(Math,arr);
}

console.log(res1);
console.log(max1);
console.log(res2);
console.log(max2);