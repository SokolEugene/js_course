
/*
Запись строк. Кавычки.
Строку можно создать с помощью одинарных,
двойных либо обратных кавычек:
*/
/*
let someStringOne = 'Привет! Я строка!'; // Одинарные
let someStringTwo = "Привет! Я строка!"; // Двойные
let someStringThree = `Привет! Я строка!`; // Обратные

console.log(someStringOne);
console.log(someStringTwo);
console.log(someStringThree);
*/

/*
Одинарные и двойные кавычки работают, по сути, одинаково,
а если использовать обратные кавычки, то в такую строку
мы сможем вставлять произвольные выражения, обернув их в ${…}:
*/
/*
let textHi = "Привет!";
let textAll = `${textHi} Я строка!`;

console.log(textAll);

function someSum(a, b) {
	return a + b;
}
console.log(`Сумма: ${someSum(4, 7)}`);


// Многострочная запись

let text = `Привет!
Вы на канале
Фрилансер по жизни!
`;
console.log(text);

*/


/*
Все что заключено в любые кавычки будет
иметь тип данных строка
*/
/*
let someString = "158";
let someNum = 158;
console.log(someString);
console.log(typeof someString);
console.log(someNum);
console.log(typeof someNum);

console.log(someString + someNum);
*/

//=============================================================================


//Спецсимволы

/*
Внутри строк можно использовать ряд спецсимволов.
Все спецсимволы начинаются с обратного слеша,
\ — так называемого «символа экранирования».
Вот несколько ихз них:
*/

/*
// Перевод строки \n

let textOne = `Привет!
Вы на канале
Фрилансер по жизни!
`;
console.log(textOne);

let textTwo = "Привет!\nВы на канале\nФрилансер по жизни!";
console.log(textTwo);
*/

//============

/*
// Табуляция (отступ) \t

let text = "Привет!\n\tВы на канале\n\t\tФрилансер по жизни!";
console.log(text);
*/

//============

/*
// Обратный слеш \\

let text = "Привет! Вы на канале Фрилансер по жизни \\ IT и фриланс";
console.log(text);
*/


//============

/*
// Кавычки \' \"

let text = "Привет! Вы на канале \"Фрилансер по жизни!\"";
console.log(text);
*/
//============

/*
// Иконки, символы UTF-16 \uКОД, UTF-32 \u{КОД}

let text = "Живи, а работай в свободное время! \u00A9 \u{1F60D}";
console.log(text);
*/

//===================================================================================
// Работа со строками

/*
//Длина строки. Свойство length

let textOne = "Привет!";
console.log(textOne.length);
*/


//==============================

/*
// Получаем символы строки

let text = "Привет!";
let firstSymbol = text[0];
let lasttSymbol = text[text.length - 1];
console.log(firstSymbol);
console.log(lasttSymbol);


for (const char of text) {
	console.log(char);
}
*/

//==============================

//Изменение строки
/*
let text = "Привет!";
text[6] = ".";
console.log(text);
*/

//==============================

/*
//Изменение регистра

let text = "Привет!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
*/

//==============================

//Поиск подстроки

// Метод str.indexOf(substr, pos)
/*
Он ищет подстроку substr в строке str, начиная с позиции pos,
и возвращает позицию, на которой располагается совпадение,
либо -1 при отсутствии совпадений.
*/
/*
let text = "Привет!";
console.log(text.indexOf('рив'));
console.log(text.indexOf('рив', 3));
*/

// Методы includes, startsWith, endsWith
/*
Более современный метод str.includes(substr, pos) возвращает true,
если в строке есть искомая подстрока, либо false, если нет.
*/
/*
let text = "Привет!";
console.log(text.includes('рив'));
console.log(text.includes('рив', 3));

console.log(text.startsWith('рив'));
console.log(text.endsWith('!'));

*/
// Регистр имеет значение!
/*
let text = "Привет!";
let searchText = "пР";

console.log(text.toLowerCase().includes(searchText.toLowerCase()));
*/

/*
В итоге indexOf стоит использовать тогда когда нам нужна
позиция найденой подстроки.
В остальных случаях удобнее использовать includes
*/


//==============================

// Получение части строки (подстроки)

/*
В JavaScript существует ряд методов получения подстроки.
Но достаточно пользоваться одним.
*/

/*
Метод str.slice(start [, end]) - Возвращает часть строки
от start до end (не включая).
*/
/*
let text = "Привет!";
console.log(text.slice(1, 2));
console.log(text.slice(-2, -1));
console.log(text.slice(1));
*/

//=============================

/*
// Сравнение строк

//Алфавитный порядок
console.log("А" > "Б");
console.log("а" > "Б");

//Алфавитный порядок
console.log('Скрипт' > 'Скрипка');

//Кол-во символов
console.log('Слайдер' > 'Слайд');

//Регистр
console.log('Фрилансер' > 'фрилансер');
*/
/*
Алгоритм сравнения двух строк довольно прост:
1.	Сначала сравниваются первые символы строк.
2.	Если первый символ первой строки больше(меньше),
	чем первый символ второй, то первая строка
больше(меньше) второй.Сравнение завершено.
3.	Если первые символы равны, то таким же образом
сравниваются уже вторые символы строк.
4.	Сравнение продолжается, пока не закончится одна из строк.
5.	Если обе строки заканчиваются одновременно,
	то они равны.Иначе, большей считается более длинная строка.
*/

