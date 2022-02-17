"use strict";
/*
9) Напишите цикл, который заполнит строку value числами от 1000 до 2000
и добавьте к каждому числу символы &#. Результат проверьте в браузере,
запустим index.html файл

Формат ответа:
console.log(value); // &#1000 &#1001 &#1002 ... &#1999 &#2000

upd: проверьте код для значений от 7000 до 10000

*/
let result = document.getElementById("result");
let value = "";
let startNum = 7000;
let endNum = 10000;
let symbol = "\u0026\u0023";

for (let i = startNum; i <= endNum; i++) {
  value += symbol + i + " ";
}
console.log(value);
result.innerHTML = value;
