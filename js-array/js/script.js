
//ДОМАШКА
/*
1. Изучить теорию
2. Решить задачи:
*/
/*
// Задача №1.
// Какое число (длинну) мы получим?
let arr = ['Ваня', 'Иштван', 'Оля',];
let newArr = arr;
newArr.push('Петя');
console.log(arr.length);

// Задача №2.
/*
Создайте массив users с элементами "Ваня" и "Иштван".
Добавьте "Оля" в конец.
Замените значение в "Иштван" на "Петя".
Ваш код для поиска значения должен
работать для массивов с любой длиной.
Удалите первый элемент массива и покажите его.
Вставьте "Маша" и "Паша" в начало массива.
*/
/*
let users = ["Ваня", "Иштвант",];
console.log(users);
users.push("Оля");
console.log(users);
users.splice(1, 1, "Петя");
console.log(users);
let removed = users.splice(0, 1)
console.log(removed);
users.splice(0, 0, "Маша", "Паша");
console.log(users);






// Задача №3.
// Удалить элемент 'Иштван' и возвратить его в переменную
let arr1 = ['Ваня', 'Иштван', 'Оля',];
console.log(arr1);
let removed1 = arr1.splice(1, 1);
console.log(removed1);

// Задача №4.
//Сделать из строки массив
let str = 'Ваня,Иштван,Оля';
let arr2 = str.split(',');
console.log(arr2);

*/
// Задача №5.
// Чему равен previousValue в начале работы метода?
let arr = [9, 2, 8,];
let reduceValue = arrTwo.reduce(function (previousValue, item, index, array) {
	console.log(previousValue);
});







