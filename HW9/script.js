"use strict";

// /*
// 1) Написать программу, которая посчитает в какой четверти
// находится указаное пользователем число.
// Результат вывести в консоль.

// Если number = 48; // returns 4
// Если number = 150; // returns 0 or Error
// Если number = 15; // returns 2
// Если number = 60; // returns 4
// */

let num = +prompt(`Введте число`);

if (num > 60 || num < 0) {
  console.log(`Error`);
} else if (num >= 0 && num < 14) {
  console.log(`1`);
} else if (num >= 15 && num < 30) {
  console.log(`2`);
} else if (num >= 30 && num <= 45) {
  console.log(`3`);
} else if (num >= 45 && num < 60) {
  console.log(`4`);
}

// /*
// 2) Напишите программу, которая спрашивает у пользователя число
// и выводит в консоль следующую информацию о нем:
//  - положиельное оно или отрицательное;
//  - сколько цифр в этом числе;

//  Если number = 0; // return 0, lenght: 1
//  Если hour = 100500; // return positive, length: 6
//  Если hour = -50; // return negative, length: 2

// upd: Если число положительное, вывести сумму его цифр.
//  Если number = 0; // return 0, lenght: 1
//  Если hour = 100500; // return positive, length: 6, sum: 6
//  Если hour = -50; // return negative, length: 2
// */

let numb = +prompt(`Введите число`);
let numbLength = numb.toString();
let sum = 0;

if (isNaN(numb)) {
  console.log("error");
}
if (numb > 0) {
  console.log("positive");
  console.log(`Length ${numbLength.length}`);
  for (i = numb; i > 0; i -= 1) {
    sum = sum + i;
  }
  console.log(`Sum ${sum}`);
} else if (numb < 0) {
  console.log("negative");
  console.log(`Length ${numbLength.length - 1}`);
} else if (numb === 0) {
  console.log("Null");
  console.log(`Length ${numbLength.length}`);
}

// /*
// 3) Известно, что путешествие на Мальдивы стоит 3000$.
// А купить новые AirPods 300$.
// Напишите программу, которая спрашивает у пользователя число (в $)
// и выводить инфорацию в консоль, что он за эти деньги может купить.

// Если money = 200$ // You can't do anything. I'm sorry :(
// Если money = 300$ // You can buy AirPods
// Если money = 3200.50$ // You can go on vacation!
// What are you waiting for?
// Если money = 4300.53 // You have enough money for everything. WOW!
// */

const money = parseFloat(prompt(`Сколькоу вас денег`)); // '110$'
const maldives = 3000;
const airPods = 300;

if (isNaN(money)) {
  console.log("Error");
} else {
  if (money < airPods) {
    console.log("You can't do anything. I'm sorry ");
  } else if (money >= airPods && money < maldives) {
    console.log("You can buy AirPods");
  } else if (money > maldives && money < maldives + airPods) {
    console.log("You can go on vacation! What are you waiting for?");
  } else {
    console.log("You have enough money for everything. WOW!");
  }
}

// /*
// 4) Напишите программу, которая спрашивает у пользователя число,
// выводит на экран все числа от 1 и до этого числа
// и возводит в степерь 2 каждое ЧЕТНОЕ его число

// Если number = 5; // returns 1 4 3 16 5
// */

const number = +prompt();
let str = "";
const square = 2;

for (let i = 1; i <= number; i++) {
  if (!(i % 2)) {
    str += Math.pow(i, square) + " ";
  } else {
    str += i + " ";
  }
}
console.log(str);

// /*
// 5) Напишите программу, которая спрашивает у пользователя число
// и выводит на экран ряд Фибоначи, который содержит в себе столько чисел,
// сколько попросил ввести пользователь.
// */

let number = +prompt(`Введите число`);
let prev = 0;
let next = 1;
let str = "";

if (isNaN(number)) {
  console.log("Error");
} else {
  for (let i = 0; i < number; i++) {
    let temp = next;
    next = prev + next;
    prev = temp;
    str += prev + " ";
  }
  console.log(str);
}

// /*
// upd: Решить эту же задачу через цикл с пустым телом.
// */

let number = +prompt(`Введите число`);
let stringFibo = "";

if (isNaN(number)) {
  console.log("Error");
} else {
  for (
    let i = 1, j = 1;
    i <= number;
    stringFibo += i + " ", [i, j] = [j, i + j]
  ) {}
}
console.log(stringFibo); // Строит ряд Фибоначи до числа которое задал пользователь.

// /*
// 6) Напишите программу, которая спрашивает у пользователя число
// от 1 до 9 и выводит таблицу умножения для этого числа.

// Если number = 5 // returns
// 1 x 5 = 5;
// 2 x 5 = 10;
// 2 x 5 = 15;
// ...
// 9 x 5 = 45;

// */

let number = +prompt(`Enter number`);
let result;
if (isNaN(number) || number === 0) {
  console.log(`Error`);
} else if (number >= 1 && number <= 9) {
  for (let i = 0; i <= 9; i++) {
    result = number * i;
    console.log(`${i} * ${number} = ${result}`);
  }
} else console.log(`Больше`);

// /*
// upd: Вывести всю таблицу умножения одним циклом.
// (для этого нужно воспользоваться возможностью запускать цикл внутри цикла).
// */

let s;
let j;
let i;
for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    s = i * j;
    console.log(`${i} * ${j} = ${s}`);
  }
}

// /*
// 7) Напишите программу, которая спрашивает у пользователя два числа
// 1 - само число, 2 - степерь в которую его нужно возвести.
// В консоль выведите результат возведения этого числа в степень.

// Если 2 и 5 // returns 32
// Если 4 и 10 // returns 1048576
// */

let num = +prompt(`Enter number`);
let exponentiate = +prompt(`Enter exponentiate`);
if (isNaN(num) || isNaN(exponentiate)) {
  console.log(`Please enter number`);
} else {
  console.log(Math.pow(num, exponentiate));
}

// /*
// upd: Вывести все степени введенного числа от 1 до 10.
// */

let num = +prompt(`Enter number`);
let exponentiate;
if (isNaN(num)) {
  console.log(`Please enter number`);
} else {
  for (let i = 1; i <= 10; i++) {
    exponentiate = Math.pow(num, i);
    console.log(`${num} ^ ${i} = ${exponentiate}`);
  }
}

/*
8) Напишите програму, которая спрашивает у пользователя символ и выводит его 5 раз в консоль, увеличивая каждый раз на 1 их колличество.
(тут можно не делать никаких проверок на валидность, так как даже
если пользователь введет не 1 символ, а более - их все можно будет тоже
скопировать)

Если # // returns
#
##
###
####
#####

Если % // returns
%
%%
%%%
%%%%
%%%%%
*/

let symbol = prompt(`Enter symbol`);
let str = "";
let num = 5;

if (symbol === "%" || symbol === "#") {
  for (let i = 1; i <= num; i++) {
    str = str.concat(symbol);
    console.log(str);
  }
} else {
  console.log(`Please enter correct symbol`);
}

/*
10) Напишите программу, которая спрашивает у пользователя положительное число и возвращает
его же в перевернутом виде.

Если number = 5678 // returns 8765
Если number = 8 // returns 8


upd: Обновите программу так, чтобы она работала и для отрицательных чисел

Если number = -98463 // returns -36489
*/

let number = +prompt(`Enter number`);
let str = "";

if (isNaN(number)) {
  console.log(`Please enter number`);
} else if (number > 0) {
  number = number.toString();
  for (let i = number.length - 1; i >= 0; i--) {
    str += number[i];
  }
  console.log(str);
} else {
  number = number.toString();
  for (let i = number.length - 1; i >= 1; i--) {
    str += number[i];
  }
  console.log(`-${str}`); // Главное что работает ахахахахахаха
}