//1) Создайте три переменные. Присвойте первой переменной числовое значение. Вторая переменная равна первой переменной, увеличенной в три раза. Третья переменная равна сумме двух первых. Выведите на экран все три/

let a = 32;
let b = a * 3;
let c = a + b;
console.log(a, b, c);

//2) Создайте функцию которая принимает две аргумента firstName и lastName для хранения имени и фамилии, запишите в них значения из модального окна prompt. Выведите на экран приветствие “What’s up John Doe”. Добавьте проверку если имя равно John Doe вывести alert со значением "Привет Admin"

let firstName = prompt("What is your name");
let lastName = prompt("What is your last name");

function userName(name, surname) {
  if (name === "John" && surname === "Doe") {
    alert("Hello Admin");
  } else {
    alert(`Whats up ${name} ${surname}`);
  }
}
userName(firstName, lastName);

//3) Создайте переменные x и y для хранения числа. Значения переменные получают из prompt. Рассчитайте произведение, частное, разность и сумму этих значений. Результат последовательно отобразите в модальном окне.

let x = +prompt("Введите значение х");
let y = +prompt("Введите значение y");
alert(x * y);
alert(x / y);
alert(x - y);
alert(x + y);

//4) Напишите функцию формулы для расчета з/п за июль с учетом, что количество рабочий часов, количество рабочих дней в неделе и рейт за час – переменные значения и читаются из prompt.(Просчитывать какой это месяц, 30 или 31 день не нужно).

let workHours = prompt("Количество отработаных часов");
let workDays = prompt("Сколько рабочих дней в месяц");
let workRate = prompt("ЗП в час");
function salaryCounter(hours, days, rate) {
  let salary = hours * days * rate;
  alert(`Ваша зарплата ${salary}`);
}
salaryCounter(workHours, workDays, workRate);

//5) Написать используя 3 разные конструкции for, while и do while цикл от 0 до 5 который на каждой итерации выводит надпись в консоль

//for

for (let i = 1; i < 6; ++i) {
  console.log("iteration with for", i);
}

// while

let n = 1;
while (n < 6) {
  console.log("iteration with while", n);
  ++n;
}

//do while

let m = 1;
do {
  console.log("iteration with doWhile", m);
  m++;
} while (m < 6);

//6) Напишите программу, которая спрашивает у пользователя как его зовут, в какой стране и в каком городе он живет и выведите результат в консоль.

let youName = prompt("Как тебя зовут?");
let country = prompt("В какой стране ты живешь?");
let city = prompt("В каком городе ты живешь?");
console.log(
  `Тебя зовут ${youName} ты живешь в ${country} и твой городё ${city}`
);
