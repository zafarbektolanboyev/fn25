// 1
// var a =1;
// function outer(){
//     var b = 2;
//     function inner() {
//         var c = 3;
//         console.log(a)
//         console.log(b)
//         console.log(c)  
//     }
//     inner()
// }
// outer()
// //ichki funksiyalar tashqi global scoupdagi o'zgaruvchilar kira oladi. SHuning uchun inner funksiya ichida console.log(a) chaqirilganda javob chiqyapti. Tashqi funksiyalar ichki funksiyalarning scoupiga kira olmaydi. 

// 2
//console.log(x);//undefind
//var x = 5;
//console.log(x);//5
//// hoisting ishga tushganda var kalit sozi tepaga chiqadi va uni qiyamati pastda qoladi shuning uchun 1qator undefind ko'rsatadi 2chi consoleda hoisting yuzaga kelpmaydi va u tog'ri javob chiqadi
// 3
//console.log(y);//error
//let y = 10;
//console.log(y);//10
// // Bu yerda tdz hodisasi yuzaga keldi 1consoldan 2console oraliqdiagi kodlar ishlamaydi.1console da o'zgaruvchi e'lon qilinishadn oldin uni elon qilib bo'lmaydi shuning uchun kodni xato chiqaryapti 2consoleda unda xato yoq ozgaruvchi birinchi e'lon qiliniyapti ekrang 10 javob chiqyapti
// 4
// {
//     console.log(z);//
//     let z = 15;
//     console.log(z)
// }
//// let kalit sozi bn e'lon qilingan o'zgaruvchilar tdz ichida ichida boganligi uchun ishlamaydi

// 5
// const student = {
//     name: "Alice",
//     age:25,
//     course: "Computer Scienes"
// };
// for (let key in student){
//     console.log(key + ": " + student[key]);
// }
// const grades = [90,85,88];

// for(let grade of grades){
//     console.log(grade)
// }
// // for in siklda bor xususiyatini qiymatlarini olish mumkin for of esa massivning har bir elementini olish va ularni ishlatish mumkinligi

                        // masalalar
// 1
// function transformWords(words) {
//     return words
//         .filter(word => word.length >= 5)
//         .map(word => word.charAt(0).toUpperCase() + word.slice(1)); 
//     }
// const words = ["apple", "banana", "pear", "grape", "kiwi", "peach", "plum"];
// const transformedWords = transformWords(words);
// console.log(transformedWords);

// 2
// const students = [
//     { name: 'Kamol', age: 21 },
//     { name: 'Jasur', age: 22 },
//     { name: 'Zafarbek', age: 20 }
// ];

// function findAndCapitalizeFirstOver20(students) {
//     const student = students.find(student => student.age > 20);
//     if (student) {
//         return student.name.toUpperCase();
//     }
//     return null;
// }
// const result = findAndCapitalizeFirstOver20(students);
// console.log(result);

// 3
// const prices = [50, 120, 200, 80, 150, 90];

// function totalPrice100(prices) {
//     const filteredPrices = prices.filter(price => price > 100);
//     const total = filteredPrices.reduce((sum, price) => sum + price, 0);   
//     return total;
// }
// const result = totalPrice100(prices);
// console.log(result);

// 4
// function checkNumbers(numbers) {
//     const allPositive = numbers.every(num => num > 0);
//     const hasLargeNumber = numbers.some(num => num > 100);
    
//     if (allPositive) {
//         console.log("Barcha sonlar musbat");
//     } else {
//         console.log("Musbat bo'lmagan sonlar bor");
//     }
    
//     if (hasLargeNumber) {
//         console.log("Katta son bor");
//     }
// }
// const numbers1 = [10, 25, 30, 150];
// const numbers2 = [10, -5, 30, 20];
// const numbers3 = [5, 10, 15, 50];

// checkNumbers(numbers1);
// checkNumbers(numbers2);
// checkNumbers(numbers3);

// 5
// function squareElementsWithMap(array) {
//     return array.map(num => num * num);
// }
// function logArrayElements(array) {
//   array.forEach(num => console.log(num));
// }
// const originalArray = [1, 2, 3, 4, 5];
// const squaredArray = squareElementsWithMap(originalArray);
// logArrayElements(squaredArray);

// 6
// function calculateNewTotal(salaries) {
//     const filteredSalaries = salaries.filter(salary => salary >= 2000);
//     const increasedSalaries = filteredSalaries.map(salary => salary * 1.10);
//     const totalNewSalary = increasedSalaries.reduce((total, salary) => total + salary, 0);
//     return totalNewSalary;
// }
// const salaries = [1500, 2100, 1800, 2400, 3000];
// const newTotal = calculateNewTotal(salaries);
// console.log(newTotal);

// 7
// const students = [
//     { name: 'Zafarbek', age: 19, score: 75 },
//     { name: 'Jasur', age: 21, score: 85 },
//     { name: 'Bekzod', age: 22, score: 95 },
//     { name: 'Komila', age: 20, score: 70 }
// ];

// function findFirstHighScorer(students) {
//     const firstHighScorer = students.find(student => student.score >= 80);
    
//     if (firstHighScorer) {
//         return { name: firstHighScorer.name, age: firstHighScorer.age };
//     }
//     return null;
// }

// function getHighScorersNamesInUpperCase(students) {
//     const highScorers = students.filter(student => student.score > 80);
//     return highScorers.map(student => student.name.toUpperCase());
// }
// const firstHighScorer = findFirstHighScorer(students);
// console.log(firstHighScorer);
// const highScorersNames = getHighScorersNamesInUpperCase(students);
// console.log(highScorersNames);

// 8
// function convertToUpperCase(str) {
//     return str.toUpperCase();
// }
// const example1 = "hello world";
// const example2 = "JavaScript is fun!";
// const example3 = "salom web dasturchi";
// console.log(convertToUpperCase(example1));
// console.log(convertToUpperCase(example2));
// console.log(convertToUpperCase(example3));

// 9
// function containsSubstring(str, substring) {
//     return str.includes(substring);
// }
// const example1 = "Hello, world!";
// const example2 = "JavaScript is fun!";
// console.log(containsSubstring(example1, "world"));
// console.log(containsSubstring(example2, "JavaScript"));

// 10
// function replaceJavaScriptWithJS(str) {
//     return str.replaceAll("JavaScript", "JS");
// }
// const example1 = "I love JavaScript. JavaScript is awesome!";
// const example2 = "JavaScript is a programming language. JavaScript frameworks are popular.";
// const example3 = "Learning JavaScript can be fun.";

// console.log(replaceJavaScriptWithJS(example1));
// console.log(replaceJavaScriptWithJS(example2));
// console.log(replaceJavaScriptWithJS(example3));

// 11
// function reverseWordsInString(str) {
//     const wordsArray = str.split(' ');
//     const reversedWordsArray = wordsArray.reverse();
//     const reversedString = reversedWordsArray.join(' ');
//     return reversedString;
// }
// const example1 = "hello programist";
// const example2 = "hello world";

// console.log(reverseWordsInString(example1));
// console.log(reverseWordsInString(example2));

// 12
// function trimWhitespace(str) {
//     return str.trim();
// }
// const example1 = "   Hello, world!   ";
// const example2 = "   salom bo'lajak dastuchilar    ";
// console.log(trimWhitespace(example1));
// console.log(trimWhitespace(example2));
