// Задача №1
// Баланс користувача зберігається у змінній balanse
// Сума покупки зберігається у змінній payment

// Перед перевіркою вивсти повідомлення:
// - "Загальна вартість товару замовлення [число] кредитів.
//     Перевіряєм кількість доступних коштів на рахунку"

// - Ящо сума покупки не перевищує баланс:
//      - Вирахувати із баланмса суму покупки
//      - Вивести повідомлення
//      "На рахунку залишилось [число] кредитів"

// - Якщо сума покупки перевищує баланс:
//      -Вивести повідомлення
//      "На рахунку не достатньо коштів для проведення операції!"

// - В кінці вивести повідомлення
//      "Операція завершена"

// 1) змінні
let balanse = 10000;
const payment = 2000;


// 2)перед перевіркою вивести повідомлення
console.log(`Загальна вартість товару замовлення ${payment} кредитів
Перевіряєм кількість доступних коштів на рахунку"`);
// 3)якщо сума покупки не перевищує баланс 
// 4)якщо  сума покупки перевищує баланс 
if(balanse >= payment){
    balanse -= payment;
    console.log(`На рахунку залишилос ${balanse} кредитів`)
}else{
console.log( `На рахунку не достатньо коштів для проведення операції!`)
}
// 5) в кінці вивести повідомлення 
console.log( "Операція завершена");

// ................................

// Задача №2
// Напиши скрипт підрахунку суми зі скидкою в залежності
// від потраченої суми за весь час (партнерська програма)

// - Загальна сума витрачених коштів зберігається в змінній
// totalSpent
// - Сума поточного платежа зберігається у змінній
// discount

// Якщо потрачено від [100 до 1000) - бронзовий партнер, знижка 2%
// Якщо потрачено від [1000 до 5000) - срібний партнер, знижка 5%
// Якщо потрачено від [5000  - золотий партнер, знижка 10%
// Якщо потрачено меньше 100) - не партнер, знижка 0%

// - В результаті вивести повідомлення
// "Оформлюємо замовлення на суму [сума] зі знижкою [знижка]"

const totalSpent = 5000;
let payment = 500;
let discount = 0;

if(totalSpent >= 100 && totalSpent < 1000) {
    console.log(' бронзовий партнер, знижка 2%');
   discount = 0.02;
} else if ( totalSpent >= 1000 && totalSpent < 5000){
    console.log( 'срібний партнер, знижка 5%');
    discount = 0.05;
} else if (totalSpent >= 5000){
    console.log('золотий партнер, знижка 10%');
    discount = 0.1;
} else {
    console.log(' не партнер, знижка 0%');
}

payment = payment - payment * discount ;
console.log(`Оформлюємо замовлення на суму ${payment} зі знижкою ${discount}`)

totalSpent += payment;

console.log(`Загальна сума витрачених коштів зберігається в змінній ${totalSpent}`);
// .............................

// Задача №3
// if...else і prompt
// //Використавши інструкцію if..else, напиши код, який буде питатись:
// «Яка кількість місяців в році». Якщо користувач вводить 12,
// то показати: «Вірно!», в протилежному випадку – вивести відповідь:
// «Не вірно!»

const userNamber = Number(prompt ('Яка кількість місяців в році?'));

if (userNamber === 12) {
    console.log('Вірно')
} else {
    console.log('Не вірно');
}
// .....................


// Задача №4
// написати програму яка питає у користувача період підписки
// на сервіс і показувати ціну підписки
// спочатку if else потім switch
 
// Якщо ввів День - ціна 1.99
// Якщо Тиждень - ціна 5.99
// Якщо місяць - ціна 10.99
// Якщо рік - ціна 100.99


let perid = prompt('Який період підписки');

// if (perid === "День") {
//     console.log(' ціна 1.99')
// } else if (perid === " Тиждень ") {
//     console.log("ціна 5.99")
// } else if ( perid === " місяць"){
//    console.log(" ціна 10.99")
// } else if (perid === " рік") {
//     console.log("ціна 100.99")
// } else{
//     console.log('Error')  
// }

switch (perid) {
    case "День":
        console.log(' ціна 1.99');
        break

    case"Тиждень":
    console.log ("ціна 5.99")
    break;

    case " місяць":
    console.log (" ціна 10.99")
    break;

    case " рік":
        console.log ("ціна 100.99")
        break;
      default:
        console.log('Error')  
    


}
// .....................

// Задача№5
// Тернарний оператор
// // Перепиши if...else з використанням тернарного оператора.

const a = 1;
const b = 2;
let result;

// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Багато';
// }

result =(a + b > 4) ? 'Мало' : 'Багато';

console.log(result);


