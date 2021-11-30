"use strict";
//Циклы

// 1) Напишите программу, которая спрашивает у пользователя его имя и выводит в консоли текстовое поздравление.

// Happy birthday to you
// Happy birthday to you
// Happy birthday, dear <name>
// Happy birthday to you
// Используйте любой цикл для реализации.

let name = prompt("Введите Имя");
let congratulations = "Happy birthday to you";
for (let i = 0; i < 4; i++) {
  if (i === 2) {
    console.log(`Happy birthday, dear ${name}`);
  } else {
    console.log(congratulations);
  }
}

// 2) Сформируйте строку '.#.#.#.#.#.#.#' с помощью цикла for, где количество повторений символов '.#' задает пользователь через команду prompt().

let howMach = prompt("Сколько раз вывести .#");
let b = "";
for (let i = 1; i <= howMach; i++) {
  // b = b + ".#"; <---- Как вариант
  b = b.concat(".#");
}
console.log(b);

// 3) Напишите программу, котрая спрашивает у пользователя число и суммирует все нечетные числа, до этого числа.
// Если пользователь не ввел число, вызвать команду prompt() c текстом "Invalid. You should enter a number" и попросить его заново ввести число.

// Результат отобразите в консоли.

let num = +prompt("Enter number");
let sum = 0;
while (isNaN(num)) num = +prompt("Invalid. You should enter a number");
{
  for (let i = num; i > 0; i -= 1) {
    if (i % 2) {
      sum = sum + i;
    }
  }
  num++;
}
console.log(sum);
