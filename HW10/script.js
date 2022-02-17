"use strict";

// 1) Создайте массив, который содержит полные имена всех сотрудников. (пожалуйста, не вручную, а с помощью цикла :))

// const fullNames = ['Karan Duffy', 'Brax Dalton', 'Jody Lam'];

let fullName = [];
for (let i = 0; i < empolyee.length; i++) {
  fullName[i] = `${empolyee[i].name} ${empolyee[i].surname}`;
}
console.log(fullName);

// 2) Найдите среднее значение всех зарплат сотрудников. Результат отобразите в консоле.

let sum = 0;
for (let i = 0; i < empolyee.length; i++) {
  sum += empolyee[i].salary;
}
sum = sum / empolyee.length;
console.log(`Средняя ЗП ${sum.toFixed(2)}`);

// 3) Выведите в консоль имя мужчины-льготника (ключ isPrivileges=true) с самой большой зарплатой.

let str=''
let index;
let maxSalary=0;
for (let i = 0; i < empolyee.length; i++) {
  if (empolyee[i].isPrivileges && empolyee[i].salary > maxSalary) {
    maxSalary = empolyee[i].salary
    index = i;
    str = `${empolyee[index].name} ${empolyee[index].surname} ${empolyee[index].salary}`
}
}
console.log(str)

// 4) Выведите в консоль полные имена (имя + фамилия) двух женщин с самым маленьким опытом работы (ключ workExperience).

// upd: (эта задача сложная, знаю. Она на подумать. Поэтому ставлю ее опциональной).


let femaleArr =[]
let newArr = [...empolyee]
  for (let i = 0, endI = newArr.length - 1; i < endI; i++) {
      let wasSwap = false;
      for (let j = 0, endJ = endI - i; j < endJ; j++) {
          if (newArr[j].workExperience > newArr[j + 1].workExperience) {
              [newArr[j].workExperience, newArr[j + 1].workExperience] = [newArr[j + 1].workExperience, newArr[j].workExperience];
              wasSwap = true;
          }
      }
      if (!wasSwap) break;
    }
for(let j =0;j<newArr.length;j++){
  if(newArr[j].gender==='female'){
    femaleArr.push(newArr[j])
  }
}
console.log(femaleArr)
let string2 = `${femaleArr[0].name} ${femaleArr[0].surname} ${femaleArr[0].workExperience}`
let string3 = `${femaleArr[1].name} ${femaleArr[1].surname} ${femaleArr[1].workExperience}`
console.log(`${string2}
${string3}`)


// 5) Выведите в консоль информацию, сколько всего заработали сотрудники за все время работы в одной строке. Формат ответа: <имя фамилия> - <сумма>.

// const str = '';
// console.log(str); // Karan Duffy - 10100
// Brax Dalton - 14400
// Jody Lam - 1440
// ...

let str3=''
let average = 0
for(let i=0;i<empolyee.length;i++){
average= empolyee[i].workExperience*empolyee[i].salary
  str3 +=`${empolyee[i].name} ${empolyee[i].surname} - ${average}
`
}
console.log(str3)