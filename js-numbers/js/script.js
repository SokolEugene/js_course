//ДОМАШКА
/*
1. Изучить теорию
2. Решить задачи:
*/

// Задача №1. Получить верное значение округления
let numOne = Math.round((1.0005 + Number.EPSILON) * 1000) / 1000;
console.log(numOne); // Выведет 1 что не верно



// Задача №2. Получить число 135.58 из строки
let valueOne = parseFloat("135.58px");
console.log(valueOne);
console.log(typeof valueOne);



// Задача №3. Построить верное условное ветвление
let value = 58 + "Фрилансер";
if (isNaN(value)) {
	console.log('Результат выражения NaN');
}

// Задача №4.
// Найти максимальное число из 10,58,39,-150,0

console.log(Math.max(10, 60, 39, -150, 0));

// Задача №5.
// Округлить число 58.858 до числа 58
let chislo = Math.floor(58.858);
console.log(chislo);



