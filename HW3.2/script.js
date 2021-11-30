"use strict";
// 1) Напишите программу, которая спрашивает и пользователя номер маршрутки.
// Если это номер 7, 255 или 115, тогда пользователь может ехать. Введите в консоли "You can go".
// Если нет - выведите в консоль "Please wait".

let num = +prompt("Введите номер маршрутки");
if (num === 7) {
  console.log("You can go");
} else if (num === 255) {
  console.log("You can go");
} else if (num === 115) {
  console.log("You can go");
} else {
  console.log("Please wait");
}

// 2) Напишите программу, которая получает число от пользователя и сравнивает введенное значение с числом Pi. Math.PI()
// Сравните является ли число больше, чем число Pi.
// Сравните является ли число меньше, чем число Pi.
// Сравните является ли число равным числу Pi.
// Если введенное число, числом не является выведите ошибку.
// Все результаты отобразите в консоли в формате:

// You entered: <number>
// Is greater then PI: true
// Is less then PI: false
// Is equal PI: false

let num = +prompt("Введите число");
let isGreater = Math.PI < num;
let isLess = Math.PI > num;
let isEqual = Math.PI == num;
if (isNaN(num)) {
  num = console.log("Это не число");
} else {
  console.log(`You entered: ${num}`);
  console.log(`Is greater then PI: ${isGreater}`);
  console.log(`Is less then PI: ${isLess}`);
  console.log(`Is equal PI: ${isEqual}`);
}

// 3) Напишите программу, которая спрашивает у пользователя число и выводит в консоль день недели в соответсвии с этим числом.
// Если введенное значение не является целым числом в диапазоне от 1 до 7, выведите в консоли сообщение "Incorrect format"
// Если число находится в нужно диапазоне, отобразите в консоли день недели эквивалентный этому числу.

let dat = +prompt("Число");
if (dat === 1) {
  console.log("Сегодня понедельник");
} else if (dat === 2) {
  console.log("Сегодня вторник");
} else if (dat === 3) {
  console.log("Сегодня среда");
} else if (dat === 4) {
  console.log("Сегодня четверг");
} else if (dat === 5) {
  console.log("Сегодня пятница");
} else if (dat === 6) {
  console.log("Сегодня суббота");
} else if (dat === 7) {
  console.log("Сегодня воскресенье");
} else if (dat < 1 || dat > 7) {
  console.log("Incorrect format");
}

// 4) Напишите программу, которая предлагает пользователю ввести пароль и проверяет, является ли он надежным по следующим условиям:
// 1) Пароль должен быть не менее шести символов.
// 2) Пароль не должен равняться строке qwerty или 123456.
// 3) Пароль должен содержать заглавные буквы.
// Если все условия выполнились, выведите в консоль сообщение "Strong".
// Если первое условие не выполнилось, выведите в консоль сообщение "Middle", если длина пароля не менее пяти символов.
// Во всех остальных случаях, выведите в консоль сообщение "Weak".

let pass = prompt("Введите пароль");
if (pass.length >= 6 && pass !== pass.toLowerCase()) {
  console.log("Strong");
} else if (pass === "qwerty" || pass === "123456") {
  console.log("Middle");
} else if (pass.length == 5) {
  console.log("Middle");
} else if (pass.length < 5) {
  console.log("Weak");
}

// 5) Напишите программу, которая спрашивает у пользователя язык.
// Если это язык "ru" - то выведите в консоль "Привет"
// Если это язык "en" - то выведите в консоль"Hello"
// Если это язык "ua" - то выведите в консоль "Привiт".
// В противном случае выведите "I don't know this language".
// Реализуйте программу двумя способами с использованием if/else и switch/case.

let language = prompt("Choose lang");
if (language === "ru") {
  console.log("Привет");
} else if (language === "en") {
  console.log("Hello");
} else if (language === "ua") {
  console.log("Привiт");
} else if (language) {
  console.log("I don't know this language");
}

let language = prompt("Choose lang");
switch (language) {
  case "ru":
    console.log("Привет");
    break;
  case "en":
    console.log("Hello");
    break;
  case "ua":
    console.log("Привiт");
    break;
  default:
    console.log("I don't know this language");
}
