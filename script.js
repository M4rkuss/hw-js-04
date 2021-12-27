// // 1) Задание с возрастом
// let age = prompt("Введите ваш возраст")
//
// if (age < 0){
//   alert("Sorry, but you weren't born yet")
// }
// else if (age <= 2 ) {
//   alert("Infant")
// }
// else if (age > 2 && age <= 11 ){
//   alert("Child")
// }
// else if (age > 11 && age <= 17 ){
//   alert("Teenager")
// }
// else if (age >= 18 && age <= 60){
//   alert("Adult")
// }
// else {
//   alert("Pensioner")
// }

// // 2) Спецсимвол
// let userNumber = prompt("Введите число от 0 до 9")
//
// if (userNumber == 0){
//   alert(")")
// }
// else if (userNumber == 1){
//   alert("!")
// }
// else if (userNumber == 2){
//   alert("@")
// }
// else if (userNumber == 3){
//   alert("#")
// }
// else if (userNumber == 4){
//   alert("$")
// }
// else if (userNumber == 5){
//   alert("%")
// }
// else if (userNumber == 6){
//   alert("^")
// }
// else if (userNumber == 7){
//   alert("&")
// }
// else if (userNumber == 8){
//   alert("*")
// }
// else if (userNumber == 9){
//   alert("(")
// }
// else{
//   alert("Нужно ввести именно число от 0 до 9!!")
// }

// // 3) Трехзначное число
// let number = prompt("Введите трехзначное число")
//
// let firstDigit = Math.floor(number / 100)
// let secondDigit = Math.floor(number/ 10) % 10
// let lastDigit = number % 10
//
// if (firstDigit !== secondDigit && firstDigit !== lastDigit && secondDigit !== lastDigit){
//   alert("Все цифры разные((")
// }
// else if (firstDigit == secondDigit == lastDigit){
//   alert("Все цифры одинаковые!")
// }
// else if (firstDigit == secondDigit) {
//   alert("Первая и вторая цифры одинаковые!")
// }
// else if (firstDigit == lastDigit){
//   alert("Первая и третья цифры одинаковые!")
// }
// else{
//   alert("Вторая и третья цифры одинаковые!")
// }

// // 4) Высокосный год
// let year = prompt("Укажите год, проверим високосный ли он")
//
// if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0){
//   alert("Год високосный")
// }
// else{
//   alert("Год не високосный!")
// }

// // 5) 5-разрядное число
// let number = prompt("Введите 5-разрядное число")
//
// let reverseNumber = number.split("").reverse().join("")
//
// if (reverseNumber === number){
//   alert("Число является палиндромом")
// }
// else {
//   alert("Число не является палиндромом")
// }