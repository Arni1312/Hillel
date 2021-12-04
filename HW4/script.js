"use strict";

// 1) Напишите программу, которая продемонстрирует работу с массивом.

// Создайте массив из восьми элементов:

// '455'
// 87.15
// true
// undefined
// null
// 'false'
// []
// {}
// Выведите информацию о типе каждого элемента в консоли.

// Добавьте значение 6 к каждому элементу массива и выведите полученные значения

// в консоли.

let arr = ["455", 87.15, true, undefined, null, "false", [], {}];
for (let value of arr) {
  console.log(typeof value, `${value} 6`);
}

// 2) Создать массив из объектов пользователей (минимум 5). Поля в объекте (это имеется ввиду ключи объекта: часто на сленге говорят "поля объекта") name, surname, age (2 должно быть от 10 до 18 лет), salary.

// Несовершенно летние работать не могут.

// К консоль нужно вывести следующее:

// Среднюю зарплату пользователей
// Сколько пользователей меньше 18 лет в формате name - age
// 2.1) Далее создайте копию этого объекта и удалите всех пользователей младше 18 лет.

// Результат выведите в консоль

// Удален пользователь name ему было age
// И копию обьекта
// 2.2) Добавьте пользователем ключ willDrink со значением true или false

// 2.2) Выведите к консоль 2 объекта

let users = [
  {
    name: "Arsen",
    surname: "Safarian",
    age: 26,
    salary: 30000,
  },
  {
    name: "Olena",
    surname: "Kosticyna",
    age: 27,
    salary: 25000,
  },
  {
    name: "Aaron",
    surname: "Safarian",
    age: 2,
    salary: 0,
  },
  {
    name: "Ali",
    surname: "Kharchenko",
    age: 17,
    salary: 0,
  },
  {
    name: "Nadiya",
    surname: "Kharchenko",
    age: 45,
    salary: 50000,
  },
  {
    name: "Olga",
    surname: "Safarian",
    age: 56,
    salary: 35000,
  },
  {
    name: "David",
    surname: "Safarian",
    age: 12,
    salary: 0,
  },
];

let midSalary = 0;
for (let i = 0; i < users.length; i++) {
  if (users[i].age > 18) {
    midSalary += users[i].salary / users.length;
  } else {
    console.log(`Имя пользователя ${users[i].name}, возраст ${users[i].age}`);
  }
}
console.log("Средняя ЗП :", midSalary);

let adultsUsers = users.filter((item) => item.age > 18);

adultsUsers.forEach((item, index) => {
  item.willDrink = true;
  if (index % 2) {
    item.willDrink = false;
  }
});

console.log(users);
console.log(adultsUsers);
