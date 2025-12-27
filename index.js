//1
let celsius = 6;
let fahrenheit;
fahrenheit = (celsius * 9) / 5 + 32;
console.log(fahrenheit);
//2
let daysInMonth = 30;
let hoursInMonth = daysInMonth * 24;
console.log(hoursInMonth);
let minutesInMonth = hoursInMonth * 60;
console.log(minutesInMonth);
//3
let playerHealth = 100;
let playerStamina = 100;
console.log((playerHealth = playerHealth - 70));
console.log((playerStamina = playerStamina - 41));
//4
const totalPrice = 597;
const discount = 0.1;
const discountedPrice = totalPrice - totalPrice * discount;
console.log(discountedPrice);
//5
const floatNumber = 12.78;
const roundedDown = Math.floor(floatNumber);
console.log(roundedDown);
//6
const floatString = "45.67";
const parsedFloat = parseFloat(floatString);
console.log(parsedFloat);
//7
const intString = "123";
const parsedInt = parseInt(intString);
console.log(parsedInt);
//8
const number = 16;
const sqrtNumber = Math.sqrt(number);
console.log(sqrtNumber);
//9
const integer = 42;
const stringNumber = "256";
const convertedInt = parseInt(stringNumber);
console.log(convertedInt);
const convertedString = integer.toString();
console.log(convertedString);
