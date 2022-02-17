"use strict";

// 1) Создайте переменную name.

// Если в переменную вписана строка, то выводим в консоль сообщение: Привет, <name>.

// Если в переменную вписана не строка, а любой другой тип данных, то выводим сообщение: Ошибка, не тот тип данных.

// const name = 'Lily'; Привет Lily
// const name = 12; Ошибка, не тот тип данных

let yourName = prompt(`Введите свое имя`);
if (isNaN(yourName)) {
  console.log(`Привет ${yourName}`);
} else {
  console.log("Ошибка, не тот тип данных.");
}

// 2) Напишите программу, которая показывает текущую дату и время в заданном формате.

// Пример вывода данных:

// Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let dayOfWeek = date.getDay();

if (hours > 12) {
  hours = hours - 12 + "PM";
} else if (hours === 12) {
  hours = hours + "PM";
} else if (hours === 0) {
  hours = hours + 12 + "AM";
} else {
  hours = hours + "AM";
}
if (minutes <= 9) {
  minutes = "0" + minutes;
}
if (seconds <= 9) {
  seconds = "0" + seconds;
}
if (dayOfWeek === 0) {
  dayOfWeek = "Sunday";
} else if (dayOfWeek === 1) {
  dayOfWeek = "Monday";
} else if (dayOfWeek === 2) {
  dayOfWeek = "Tuesday";
} else if (dayOfWeek === 3) {
  dayOfWeek = "Wednesday";
} else if (dayOfWeek === 4) {
  dayOfWeek = "Thursday";
} else if (dayOfWeek === 5) {
  dayOfWeek = "Friday";
} else if (dayOfWeek === 6) {
  dayOfWeek = "Saturday";
}
console.log(`Today is : ${dayOfWeek}`);
console.log(`Current time is : ${hours}:${minutes}:${seconds}`);

// 3) Напишите программу, которая найдет все года, когда 1 января выпадает на воскресенье в период между 2015 и 2050 годом включительно (обратите внимание, что 1 января в кавычках).

// "1st of January" is being a Sunday in <year>

for (let i = 2015; i <= 2050; i++) {
  if (!new Date(`January 1, ${i} 00:00:00`).getDay()) {
    console.log(`"1st of January" is being a Sunday in ${i}`);
  }
}

// 4) Напишите программу, которая создает первое случайное целое число от 1 до 10 включительно и спрашивает у пользователя второе целое число.

// Если пользователь ввел неверное число, вывести в консоль сообщение об ошибке.

// Если числа совпадают, вывести в консоль Good work, если нет - Not matched.

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let randomNumber = getRandomIntInclusive(1, 10);
let userNumber = prompt("Введите свое число");
if (isNaN(userNumber)) {
  console.log("Error");
} else if (userNumber === randomNumber) {
  console.log("Good work");
} else {
  console.log("Not matched");
}

// 5) Напишите программу, которая спрашивает у пользователя температуру в Цельсиях и конвертирует ее в Фаренгейты. Результат отобразите в консоли.

// Формула для конвертации: Цельсий х 1,8 + 32 = Фаренгейт

// tips: градус Цельсия в юникоде будет "\u2103", чтобы отобразить его в строке. Попробуйте сами найти символ для обозначения градуса Фаренгейта.

// 60°C is 140°F

let userTemperatureCelsius = +prompt("Введите свою температуру");
let userTemperatureFahrenheit = userTemperatureCelsius * 1.8 + 32;
let Celsius = "\u2103";
let Fahrenheit = "\u2109";
console.log(
  `${userTemperatureCelsius}${Celsius} is ${userTemperatureFahrenheit.toFixed(
    1
  )}${Fahrenheit}`
);
