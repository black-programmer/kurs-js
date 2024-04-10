"use strict"

// Правильно писать переменные
// shake_case
// UPPER_SNAKE_CASE - неизменые переменые, нельзя менять по коду
// Kebab-case
// PascalCase

// простые типы данных
// null когда нет в коде например переменной которую мы пытаемся вывести
// undefined когда нет значения например есть переменная но нет значения

// масив const arr = [1, 2, 3,];
// обьект const obj = {a: 1, b: 2};

// typeof() узнать тип данных 
// обсолютно все данные от пользователя приходят в виде строки

// let nameUser = alert("Введите свое имя: ");
// let nameUser = confirm("Введите свое имя: ");
// let ageUser = prompt("Введите ваш возраст:", "18");
// + оператор плюс преобразовывает str в number
// let ageUser = +prompt("Введите ваш возраст:", "18");

// const answers = [];

// answers[0] = prompt("Как ваше имя?", "");
// answers[1] = prompt("Как ваша фамилия?", "");
// answers[2] = prompt("Сколько вам лет?", "");

// document.write(answers);

// интерполяция console.log(`Привет ${nameUser}!`);
// const category = "catalog";
// console.log(`https://sitename.ru/${category}/5`);


 // let incr = 10,
 //    decr = 10;

// incr++; // инкремент 
// decr--; // декремент
// incr++; // Префиксный инкремент
// ++incr; // Постфиксный инкремент

// console.log(--incr); - Постфиксный декремент
// console.log(++decr); - Постфиксный инкремент
// console.log(50%3);  - остаток от деление

// console.log(2+4 == "6"); - знак равенства

// console.log(2+4 === "6"); - знак строгого равенства

// const isChecked = false,
//       isClose = true;

// console.log(isChecked && isClose); - оператор "&& "И" - все значения должны быть true
// console.log(isChecked || isClose); - оператор || ИЛИ хоть одно значение true 
// console.log(isChecked || !isClose); - оператор отрицания значения "!"

// console.log(2 + 2 * 2 != 6); - оператор неравенства "!="
// console.log(2 + 2 * 2 !== "6"); - оператор неравенства со строгой типизацией


// const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");


// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const a = prompt("Один из последних просмотренных фильмов?", ""),
//       b = +prompt("На сколько оцените его?", ""),
//       g = prompt("Один из последних просмотренных фильмов?", ""),
//       d = +prompt("На сколько оцените его?", "");

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[g] = d;

// console.log(personalMovieDB);


//  let bonus = +prompt("Угадай число!", "")

//  let bonus2 = bonus;

// if (bonus == 99) {
//     console.log("Поздравляем Вас! Вы угадали число " + bonus)
// } else if (bonus > 90) {
//     console.log("Почти угадали!")
// } else {
//     console.log("Неправильно, попробуйте ещё раз.")
// }

// (bonus2 == 99) ? console.log("Поздравляем Вас! Вы угадали число " + bonus) : console.log("Неправильно, попробуйте ещё раз.");


// switch (bonus) {
//     case 99:
//         console.log("Поздравляем Вас! Вы угадали число " + bonus)
//         break;
//     case 90:
//         console.log("Почти угадали!")
//         break;
//     case 50:
//         console.log("Неправильно, попробуйте ещё раз.")
//         break;
    //    default:
    //        console.log("Неправильно, попробуйте ещё раз.")
// }


// var select = document.querySelector("select");
// var para = document.querySelector("p");

// select.addEventListener("change", setWeather);

// function setWeather() {
//   var choice = select.value;

//   if (choice === "sunny") {
//     para.textContent =
//       "Сегодня хорошо и солнечно. Носите шорты! Идите на пляж, или в парк, и купите мороженое.";
//   } else if (choice === "rainy") {
//     para.textContent =
//       "Дождь падает за окном; возьмите плащ и зонт, и не находитесь слишком долго на улице.";
//   } else if (choice === "snowing") {
//     para.textContent =
//       "Снег падает - морозно! Лучше всего посидеть с чашкой горячего шоколада или слепить снеговика.";
//   } else if (choice === "overcast") {
//     para.textContent =
//       "Дождя нет, но небо серое и мрачное; он все может измениться в любую минуту, поэтому на всякий случай возьмите дождевик.";
//   } else {
//     para.textContent = "";
//   }
// }