"use strict";

// 1) В пачке бумаги 500 листов.За неделю в офисе расходуется 1200 листов.Какое наименьшее количество пачек бумаги нужно купить в офис на 8 недель ? Результат отобразите в консоли(команда console.log()).

const sheetsInReamPaper = 500;
const consumptionPerWeek = 1200;
const weeksAmount = 8;
const howMuchPaper = Math.ceil(
  (weeksAmount * consumptionPerWeek) / sheetsInReamPaper
);
console.log(`Нужно ${howMuchPaper} пачек бумаги`);

// 2) Напишите программу, которая спрашивает у пользователя номер квартиры (команда prompt()) и выводит в консоль номер этажа и номер подъезда. Этажей у нас 9, квартир на этаже по 3. Результат (этаж и подъезд) отобразите в консоли (команда console.log()).

const roomsOnFloor = 3;
const floors = 9;
const roomNumber = +prompt(`В какой вы живете квартире?`);
let floor = Math.ceil(roomNumber / roomsOnFloor);
let entrance = Math.ceil(floor / floors);
floor -= (entrance - 1) * floors;
console.log(`У вас квартира в ${entrance} подьезде на ${floor} этаже`);

// 3) Напишите программу которая считает процент от суммы по кредиту. Процент и сумму получаем от пользователя (команда prompt()), результат выводим в консоль (команда console.log()). Учитывайте, что пользователь может отправить процент как 10 или же как 10%.

const percent = parseFloat(prompt("Ваша процентная ставка"));
const sum = +prompt("Стоимость покупки");
let reult = (sum / 100) * percent + sum;
console.log(`Вот сумма вашего кредита ${reult}`);

// 4) У Олеси есть 888$ от ежемесячной зарплаты, которые она может потратить на покупку нового компьютера, которы стоит 13850$. Рассчитайте ежемесячный беспроцентный платеж, который должна платить Олеся, если возьмет компьютер в рассрочку на 9 месяцев. Сможет ли Олеся купить компьютер (ожидается ответ в виде математической операции)?

// Какие типы данных используются для переменных, которые выведут результат на консоль?

const money = 1000;
const price = 13850;
const loanMaxMonth = 9;
const monthlyPayment = price / loanMaxMonth;
const result = monthlyPayment < money; //  boolean
console.log(`Олеся ${result} купить компьютер`);
