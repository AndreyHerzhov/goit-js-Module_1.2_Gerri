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

// const daysUnitDeadline = prompt('');
// const daysInput = parseInt(daysUnitDeadline);
// let result;

// if (daysInput === 0) result = 'Сегодня';
// if (daysInput === 1) result = 'Завтра';
// if (daysInput === 2) result = 'Послезавтра';
// if (daysInput === 3) result = 'Дата в будущем';
// if (daysInput === 4) result = 'Когда то';

// console.log(result)


// ---- switch ---- //

//     const daysUnitDeadline = prompt('');
//     const daysInput = parseInt(daysUnitDeadline);
//     let result;
  
// switch (daysInput) {
//     case 1: {
//         result = 'Сегодня';
//         break;
//     }
        
//         case 2: {
//         result = 'Завтра';
//         break;
//     }
//          case 3: {
//         result = 'Послезавтра';
//         break;
//     }
         
//     default:
//         result = 'Дата в будущем'
        
// }

// console.log(result);

// --------- 9 for ------------------ //

// const max = 120;
// const min = 20;

// for (let i = min; i <= max; i += 1){
//     if(i % 5 === 0)
//     console.log(i)
// }

// ----------- 10 Ввод пользователя и ветвления ------ //

// const login = prompt(`Логин`);
// console.log(`Login:`, login);

// if (login === `Админ`) {
//     const password = prompt(`Пароль`);
//     console.log(`password:`, password);

//     // if (password === `Я админ`) {
//     //     console.log(`Здравствуйте`);
//     // } else {
//     //     console.log(`Неверный пароль`)
//     } else {
//         if (!login || login === null) {
//             console.log(`Отмена`);
//         } else {
//             console.log(`Я вас не знаю`)
//         }
    
// }

// ----------- real life login & password ------- //

// function checkLoginAndPassword(login, password){}

// const login = prompt(`Логин`);
// const password = prompt(`Пароль`);

// console.log(checkLoginAndPassword(login, password))



// --------- //

// const numbers = [2, 3, 71, 234, 33, 45, 653];
// const threshold = 72;

// // Для чисел меньше чем порог срабатывает continue, выполнение тела прекращается
// // и управление передаётся на следующую итерацию.
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] >= threshold) {
//     break;
//   }

//   console.log(`Число меньше чем ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }

// ----------------------------- //

// const a = ["Mango"];
// // Так как a это массив, в b записывается ссылка на уже существующий
// // массив в памяти. Теперь a и b указывают на один и тот же массив.
// const b = a;
// console.log(a); // ["Mango"]
// console.log(b); // ["Mango"]

// // Изменим массив, добавив еще один элемент, используя указатель из a
// a.push("Poly");
// console.log(a); // ["Mango", "Poly"]

// // b также изменилось, потому что b, как и a,
// // просто содержит ссылку на одно и то же место в памяти
// console.log(b); // ["Mango", "Poly"]

// b.push("Ukraine");



// // // Результат повторяется
// b.push("Ukraine");
// console.log(a); // ["Mango", "Poly", "Ukraine"]
// console.log(b); // ["Mango", "Poly", "Ukraine"]


// ------------ SPLIT ----------- //
const nameToChange = "Mango";
console.log(nameToChange.split("")); // ["M", "a", "n", "g", "o"]

const message = "JavaScript это интересно";
console.log(message.split(" ")); // ["JavaScript", "это", "интересно"]