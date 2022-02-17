"use strict";

// 1) Создайте объект vegetable, с такими свойствами, чтобы следующий код вернул "onions are usually white".
let vegetable = {
  name: `onion`,
  color: `white`,
  shape: `round`
}
const { name, color } = vegetable;
console.log(`${name}s are usually ${color}`);


// 2) Добавьте свойства в объект vegetable так, чтобы в консоль вывелось "onions are usually round".

const { shape } = vegetable;
console.log(`${name}s are usually ${shape}`);


// 3) Создайте массив объектов vegetables (каждый элемент массива имеет содержит точно такую же структуру как объект vegetable) так, чтобы следующий код вернул "cucumbers are usually green", "tomatoes are usually red"

let vegetables = [
  {
    name: `cucumber`,
    color: `green`,
    shape: `long`
  },{
    name: `onion`,
    color: `white`,
    shape: `round`
  },{
  name: `tomatoe`,
  color: `red`,
  shape: `round`
},{
  name: `pumpkin`,
  color: `orange`,
  shape: `round`
}
]
const [cucumber,onion, tomatoe, pumpkin] = vegetables;
console.log(`${cucumber.name}s are usually ${cucumber.color}`);
console.log(`${tomatoe.name}s are usually ${tomatoe.color}`);

// 4) Используя деструктуризацию можно разбить массив на необходимые части. Например записать в переменную отдельно объект onion, и остальные овощи в новый массив.

const [firstVegetable, ...otherVegetables] = vegetables;
console.log(firstVegetable.name === cucumber.name); // true
// Или же обращаться к любому элементу массива, пропуская предыдущие.

const [,,,pubpkins] = vegetables; 
console.log(`${pubpkins.name}s are usually ${pubpkins.color}`); //pubpkins are usually orange


// Используя примеры выше, создайте следующий массив объектов, выведите 2й элемент массива и длинну массива оставшихся элементов.

let students = [
  { name: 'Kate', age: 25 },
  { name: 'Artur', age: 30 },
  { name: 'Nick', age: 15 },
  { name: 'Alex', age: 28 },
  { name: 'Zhenia', age: 45 },
];
const [firstStudent,secondStudent, ...newStudents]= students
console.log(secondStudent)
console.log(newStudents.length)
