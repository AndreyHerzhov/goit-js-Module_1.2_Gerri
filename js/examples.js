// -------------- 1 ---------------- //
// const userInput = prompt(`Какое официальное название JavaScript?`);

// let answer;

// if (userInput === `ECMAscript`) {
//     answer = `True`;
// } else {
//     answer = `False`;
// }

// console.log(answer);

// --------------- 2 ---------------- //

// const hours = 14;
// const minutes = 0;
// let timestring;

// if (minutes > 0) {
//     timestring = `${hours}ч. ${minutes}мин.`
// } else {
//     timestring = `${ hours } ч.`;
// }

// const timestring = minutes > 0 ? `${hours}ч. ${minutes}мин.` : `${hours} ч.`;

// console.log(timestring);

// --------- 3 Ветвления -------- //

// const userInput = prompt(`Введите число`);
// const userNumber = parseInt(userInput);
// let answer;

// if (userNumber > 0) {
//     answer = `Это положительное число`;
// } else if (userNumber < 0) {
//     answer = `Это отрицательное число`;
// } else if (userNumber === 0) {
//     answer = `Это ноль`;
// } else {
//     answer = `Это не число`;
// }
    
// if (isNaN(userNumber)) answer = `Это не число`;


// console.log(answer)


// -------- 4 Вложеные ветвления -------- //

// const a = 120;
// const b = 110;

// let result;

// if (a > 100 && b > 100) {
//      if (a > b) result = a;
//      if (b > a) result = b;
//     result = Math.max(a, b);
// } else {
//     result = b + 512 ;
// }
// console.log(result)

// ----------- 5 Форматирование ссылки (endsWith) ----------- //

// let link = 'https://my-site.com/about/';

// // if (!link.endsWith('/')) link += '/';
// if (link[link.length - 1] !== '/') link += '123';

// console.log(link);

// ------------- 6 Форматирование ссылки (includes и логическое "И") ---- //

// let link = 'https://my-site.com/about';

// if (!link.endsWith('/') && link.includes('my-site')) link += '/';
 
// console.log(link);

// ---------- 7 if...else и логические операторы ------ //

// const hours = 25;
// let statusHours;

// if (hours < 17) statusHours = 'Pending';
// if (hours >= 17 && hours <= 24) statusHours = 'Expires';
// if (hours > 24) statusHours = 'Overdue';

// console.log(statusHours);

// -------------- 8 Дедлайн сдачи ДЗ через if...else ------ //

const daysUnitDeadline = prompt('');
const daysInput = parseInt(daysUnitDeadline);
let result;

if (daysInput === 0) result = 'Сегодня';
if (daysInput === 1) result = 'Завтра';
if (daysInput === 2) result = 'Послезавтра';
if (daysInput === 3) result = 'Дата в будущем';
if (daysInput === 4) result = 'Когда то';

console.log(result)