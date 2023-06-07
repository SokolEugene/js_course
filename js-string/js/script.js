//ДОМАШКА
/*
1. Изучить теорию
2. Решить задачи:
*/

// Задача №1. Верна ли запись?
let fls = "фрилансер";
let text = `Привет! Я ${fls}`;
// Ожидаем получить Привет! Я фрилансер
console.log(text);

// Задача №2. Получить символ "н" строки:
let text1 = 'фрилансер';

console.log(text1.slice(5, 6));


// Задача №3. Верно?
let text2 = 123 + 456;
//let otvet = number(text2);
// Ожидаем 579
console.log(text2);



// Задача №4. Получить строку в верхнем регистре
let text3 = 'фрилансер';
console.log(text3.toUpperCase())


// Задача №5. Получить подстроку "лан" из:
let text4 = 'фрилансер';
console.log(text4.slice(3, 6));

// Задача №6. true или false ?
let text5 = 'фрилансер';
console.log(text5.includes('лан', 4));

