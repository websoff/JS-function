// Создать функцию, которая будет определять, является ли число четным.
//  Число должно передаватся в качестве параметра функции. 

// function firstFunction(num){
//     if(num%2==0){
//         alert("Число четное");
//     }else{
//         alert("Число не четное");
//     }
//     return;
    
// }
// firstFunction(10);

// рещение Кирилла-----------------------------------------------

// const isEven = function(number){
//     if(number %2===0){
//         return true;
//     }else{
//         return false;
//     }
// }
// const testNum = +prompt("write a number");

// const result = isEven(testNum);

// console.log(result);
// -----------------------------------------------------------------------
// const isEven = function(number){
//     return number %2===0
// }
// const testNum = +prompt("write a number");

// const result = isEven(testNum);

// console.log(result);

// рещение Кирилла-----------------------------------------------

// Создать функцию, которая будет возвращать наименьшее из двух чисел. 
// Числа должны передаватся в качестве параметров функции.

// function secondFunction(firstNum,secondNum){
//     // let firstNum = +prompt("Write a first number");
//     // let secondNum = +prompt("Write a second number");
//     if (firstNum > secondNum){
//         alert(firstNum + " больше чем " + secondNum);
//     }if (secondNum > firstNum){
//         alert(secondNum + " больше чем " + firstNum);
//     }else{
//         alert(" они равны ");
//     }
// }
// secondFunction();

// Созадть функцию которая принимает количестов денег у пользователя и стоимость товара.
//  Функция должна вернуть правду если пользователю хватает денег на покупку товара.

// function thirdFunction(money, price){

//     if(money >= price){
//         return alert("все четко!");
//     }else{
//         return alert("Братик у тебя деньжат маловато");
//     }
// }
    
// thirdFunction(+prompt("сколько денег у тебя?"), +prompt("Сколько стоит товар?"));


// * Создать функцию которая возвращает абсолютную величину числа.
// *Дополнительно создать проверки которые при введении в функцию не чисел

// ..................................................................................................................

// калькулятор на свитч-кейс---------------------------------------------------

// const calc = function(num1, num2, operator){
// switch (operator) {
//     case '+':
//         return (num1 + num2);
//     case '-':
//         return (num1 - num2);
//     case '/':
//         if(num2 != 0) {
//             return (num1 / num2); 
//                   }
//                   else{
//                     return "На ноль делить нельзя"
//                   }
//     case '*':
//         return (num1 * num2);   
// }
// }
// calc();

// С помощью условной конструкции if ... else реализовать функцию которая будет принимать строку в которой описан текущий цвет светофора и которая будет говорить пользователю, какое действие ему сейчас можно делать в виде строки. (красный => стоять  и тд)------------------------
// const light = function (color){
//     if(color == "красный"){
//         console.log(color + " => стоять")
//     }else if(color == "зеленый"){
//         console.log(color + " => Кроком Руш!")
//     }else if(color == "желтый"){
//         console.log(color + " => готовся идти")
//     }else{
//         console.log("ты либо не правильно написал цвет либо использовал буку ё ,а я ее не использовал)))");
//     }
// }
// light();

// ---------------------------------------------------------------------------------------------------------------------------------
// Реализовать функцию которая будет принимать месяц в виде числа и будет возвращать к какому сезону он относится.
// Условную конструкцию используте на свое усмотрение

// const month = function(month){
//     switch(month){
//         case 1 :
//         case 2 :
//         case 12 :
//             return('ну это Зима');
//         case 3 :
//         case 4 :
//         case 5 :
//             return('ну это Весна');
//         case 6 :
//         case 7 :
//         case 8 :
//             return('ну это Лето');
//         case 9 :
//         case 10 :
//         case 11 :
//             return('ну это Осень');
//         default:
//                 console.log("Месяц введи нормально а не это " + month );
//     }   
// }