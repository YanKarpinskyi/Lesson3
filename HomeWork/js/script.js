//  -- 1 --
// У вас є масив об’єктів fruts, і в кожному з них є name
// Напишіть код, який перетворює їх в масив імен.

// const fruts = [
//   { id: 0, name: "Apple" },
//   { id: 1, name: "Tomat" },
//   { id: 2, name: "Cherry" },
//   { id: 3, name: "Orange" },
// ];

// let arr = fruts.map(f => f.name);
// console.log(arr);

//  -- 2 --
//Виведіть парні числа від 2 до 10, використовуючи цикл for.

// let result = [];
// for (let num = 2; num <= 10; num ++) {
//     if (num % 2 === 0) {
//         result.push(num);
//     }
// }
// console.log(result);

//  -- 3 --
//Замініть цикл "for" на "while"
// for (let i = 0; i < 5; i++) {
//     console.lpg( `цифра ${i}!` );
//   }

// let i = 0;
// while (i < 5) {
//     console.log( `цифра ${i}!` );
//     i++;
// }

//  -- 4 --
//Напишіть цикл, який пропонує prompt ввести число більше за 100.
//Якщо відвідувач введе менше число – попросити ввести ще раз, і так далі.
//Цикл повинен запитувати число доти, доки відвідувач не введе число,
// більше за 100, або не скасує ввід/введе порожній рядок.

// let value;
// do {
//     value = prompt("Enter a number greater than 100 please:");
//     if (value === "" || value === null) break;

// } while (value <= 100);

//  -- 5 --
// Вирахуйте середній вік

// const girls = [
//   { age: 23, name: "Оля" },
//   { age: 29, name: "Аня" },
//   { age: 10, name: "Юля" },
//   { age: 20, name: "Катя" },
// ];

// let avage = Number(girls.reduce((sum, girl) => sum + girl.age, 0) / girls.length);

// console.log(avage);