"use strict";

// 1) Доработайте массив employee, с которым мы работали в прошлом дз.

// 1.1) Добавьте в массив два новых объекта с такими же свойствами, но с другими значениями.

let newArr = empolyee.push({
    id: 12,
    name: 'Nastia',
    surname: 'Omelchenko',
    salary: 366,
    workExperience: 2,
    isPrivileges: false,
    gender: 'female',
  },
  {
    id: 13,
    name: 'Artur',
    surname: 'Karapetyan',
    salary: 6000,
    workExperience: 15,
    isPrivileges: false,
    gender: 'male',
  },
  {
    id: 14,
    name: 'Evian',
    surname: 'Zolu',
    salary: 963,
    workExperience: 6,
    isPrivileges: false,
    gender: 'male',
  },
  {
    id: 15,
    name: 'Nadia',
    surname: 'Kharchenko',
    salary: 3000,
    workExperience: 7,
    isPrivileges: false,
    gender: 'female',
  })

// 1.2) Выведите в консоль массив женщин-сотрудника(-ов) с опытом работы менее 10ти месяцев.

let femaleArr = empolyee.filter(empolyee=> empolyee.gender===`female`&& empolyee.workExperience<10)
console.log(femaleArr)

// 1.3) Выведите в консоль объект сотрудника, у которого id = 4.

let objId4 = empolyee.find(empolyee=> empolyee.id===4)
console.log(objId4) 

// 1.4) Выведите в консоль массив фамилий сотрудников.

let surnameArr = empolyee.map(empolyee=>empolyee.surname)
console.log(surnameArr)

// 2) Создайте массив frameworks со значениями: ‘AngularJS’, ‘jQuery’
let frameworks = [`AngularJS`, `jQuery`]
console.log(frameworks)
// a. Добавьте в начало массива значение ‘Backbone.js’
frameworks.unshift(`Backbone.js`)
console.log(frameworks)
// b. Добавьте в конец массива значения ‘ReactJS’ и ‘Vue.js’
frameworks.push(`ReactJS`,`Vue.js`)
console.log(frameworks)
// c. Добавьте в массив значение ‘CommonJS’ вторым элементом
frameworks.splice(1,0,`CommonJS`)
console.log(frameworks)
// d. Найдите и удалите из массива значение ‘jQuery’ (нужно найти индекс элемента массива) и выведите его в консоль со словами “Это здесь лишнее”

let jQuery = frameworks.findIndex(frameworks=> frameworks===`jQuery`)
console.log(`${frameworks[jQuery]} Это здесь лишнее`)
frameworks.splice(jQuery,1,`Это здесь лишнее`)
console.log(frameworks)

// 3) Создайте функцию removeNegativeElements, которая удаляет из входящего массива все негативные числа.

let result1 = removeNegativeElements([-9, 2, 3, 0, -28, 'value',{},null,undefined,true,[]]); // [2, 3, 0, 'value'];
let result2 = removeNegativeElements([-9, -21, -12]); // []
let result3 = removeNegativeElements(['-102', 102]); // ['-102', 102]

function removeNegativeElements(){
  const arr = [...arguments[0]]
  let newArr = arr.filter(number => typeof(number)!==`number` || number>=0)
  return newArr
}
console.log(result1)
console.log(result2)
console.log(result3)

// 4) Создайте функцию getStringElements, которая возвращает входящий массив только со строковыми значениями.

let arr = [1 , true , 42 , "red" , 64 , "green" , "web" , new Date() , -898 , false]
let result = getStringElements(arr); // ['green', 'web']

function getStringElements(){
  const arr = [...arguments[0]]
  let newArr = arr.filter(key => typeof(key)===`string`)
  return newArr
}
console.log(result)

// 5) Напишите функцию flatArray, которая превращает массив в массиве в единый массив.
// tips: вам поможет в этом метод reduce() c начальным значением [] и spread оператор.
// ps. Вообще эта задача решается через метод массива flat, но давайте в качестве практики и обучения решим ее через reduce.


let array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let result5 = flatArray(array); // [1, 2, 3, 4, 5, 6, 7, 8, 9] 

function flatArray (array){
  let reduceArr=[...arguments[0]]
  return reduceArr.reduce((previousValue,currentValue)=>previousValue.concat(currentValue),[])
}
console.log(result5)

// 6)* Cоздайте функцию myMap, которая принимает в качестве аргумента массив и функцию, как этот массив должен быть модифицирован.

let arr1 = [1, 2, 3, 4];
function increaseElement (element) {
  return element * 2;
}
function myMap(arr,func){
let newArr=arr.map(func)
return newArr
}
let result6 = myMap(arr1, increaseElement) // [2, 4, 6, 8];
console.log(result6)