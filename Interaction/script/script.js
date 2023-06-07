/*
// prompt
// Функция prompt принимает два аргумента:


result = prompt(title, [default]);
//Этот код отобразит модальное окно с текстом, полем для ввода текста и кнопками OK/Отмена.

// title
// Текст для отображения в окне.
// default
// Необязательный второй параметр, который устанавливает начальное значение в поле для текста в окне.
/*

let age = prompt('Сколько тебе лет?', 100);

alert(`Тебе ${age} лет!`); // Тебе 100 лет!

//=================================================

/*
let test = prompt("Test");
//Чтобы prompt хорошо выглядел в IE
//рекомендуется всегда указывать второй параметр:

let test = prompt("Test", ''); // <-- для IE
*/

/*
//confirm
//Синтаксис:

// result = confirm(question);
// Функция confirm отображает модальное окно с текстом вопроса question и двумя кнопками: OK и Отмена.

// Результат – true, если нажата кнопка OK. В других случаях – false.

// Например:

let isBoss = confirm("Ты здесь главный?");

alert( isBoss ); // true, если нажата OK
*/
/*
let userName = prompt("Введите ваше имя");
alert(`Ваше имя ${userName}`);

let confirmUserName;
//userName = confirmUserName;
confirmUserName = confirm(`Ваше имя действительно ${userName}?`);
alert(confirmUserName);
*/
let mathInJs;
mathInJs = (0.1 + 0.2);
alert(mathInJs);