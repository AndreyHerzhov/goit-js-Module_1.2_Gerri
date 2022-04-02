// console.log(`Module 1.2`);


// ---------break --------- //
// for (let i = 0; i < 10000; i++) {
//     console.log(i);
//     if (i === 5) {
//     console.log(`i:`, i);
//         // break;
//     }
    
// }
    

// ------------ contionue ----------- //

// for (let i = 0; i < 100; i++) {
//     if (i % 5 !== 0) {
//         continue;
//     }
//     console.log(i);
// }


// --------- ternarny ----------- //

// if (true) {
//     console.log(`1`);
// } else {
//     console.log(`2`);
// }

// const x = 4;

// console.log(x > 5 ? `Da` : `Net`);

// ----------- slice --------------- //

// const str = `I love JS!`;

// const subStr1 = str.slice(7, 9);
// const subStr2 = str.substring(7, 9);
// const subStr3 = str.substr(7, 2);

// console.log(subStr1);
// console.log(subStr2);
// console.log(subStr3);


// ---------- spam ----------- //

// const checkForSpam = (message) => {
//     const words = [`spam`, `sale`, `robot`];
//     const string= message.toLowerCase();
//     let hasSpam = false;

//     for (let i = 0; i < words.length; i += 1) {
//         const word = words[i];
        
//         //console.log(word, string);
//         if (string.includes(word)) {
//             hasSpam = true;
//             break;
        
//         }
//     }
    

//     return hasSpam;
// };

// console.log(checkForSpam(`lorem ipsum`));
// console.log(checkForSpam(`lorem sAle ipsum`));
// console.log(checkForSpam(`lorem spAm ipsum`));
// console.log(checkForSpam(`lorem RoboT ipsum`));


// const checkLogins = (userLogin) => {
//     const logins = [`admin`, `login`, `password`];
//     // const string= userLogin.toLowerCase();
//     // let hasLogin = false;

//     // for (const login of logins) {
       
//     //     if (string === login) {
//     //         hasLogin = true;
//     //         break;
        
//     //     }
//     // }
    

//     return logins.includes(userLogin);
// };

// console.log(checkLogins(`loremipsum`));
// console.log(checkLogins(`admin`));
// console.log(checkLogins(`password`));
// console.log(checkLogins(`login`));



// ------ (||) ------- //

// console.log(0 || NaN || 1);
// console.log(1 || NaN || 2);

// if (0 || false || null) {
//     console.log(`Ura`);
// }


// const userInput = prompt(`Enter Name`)

// console.log(`Hello:`, userInput || `Nemo`)

// if ([0]) {
//     console.log(`Ura`);
// }