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

// //setTimeout(function(){
//     console.log("salom")
// }, 2000)

// let i = 1;
// let interval = setInterval(function(){
//     console.log(i)
//     if(i == 10){
//         clearInterval(interval)
//     }
//     i++;
// }, 100)













                // Masalalar
// 1
// let fruits = ['olma', 'anor', 'anjir', 'ananas', 'gilos'];

// function setArr(arr) {
//     let result = arr.filter(function(value){
//         return value.length >= 5;
//     })
//     result = result.map(function(value){
//         value = value.replace(value[0], value[0].toUpperCase())
//         return value;
//     })
//     return result;
// }
// console.log(setArr(fruits))



// 2
// let students = [
//     {name:"Jhon", age:"30"},
//     {name:"Doe", age:"29"},
//     {name:"Botir", age:"9"},
//     {name:"OLim", age:"10"},
// ]

// const findStudents = function(arr){
//     let result = arr.find(function(value){
//         return value.age > 20
//     });
//     if(result){
//         return result.name.toUppercase();
//     }else{
//         return "Yoshi 20 dan katta o'quvchi mavjud emas"
//     }
// }
// console.log(findStudents(students))

// 3
// let prices = [200, 300, 500, 400];
// let sum = 0;
// prices.forEach(el =>{
//     if(el > 100){
//         sum += el
//     }
// })
// console.log(sum)

// 4
// function isPositive(arr){
//     let result = arr.every(function(value){
//         return value > 0
//     })

//     let isExistOverHundred = arr.some(function(value){
//         return value > 100
//     })
    
//     if(isExistOverHundred){
//         console.log("Katta son bor")
//     }
//     if(result){
//         return "Barcha sonlar musbat"
//     }else{
//         return "Musbat bo'lmagan sonlar bor"
//     }
// }
// console.log(isPositive([4,6,10,-1,20]));


// 5
// let arr = [1,2,3,4,5];
// function sqrtArray(arg){
//     let result = arg.map(function(value){
//         return value ** 2;
//     })
//     console.log(result)
// }
// sqrtArray(arr)

// 6
// let arr = [1400, 5000, 3000, 1000];
// function salary(arr){
//     let result = arr.map(function(value){
//         if(value >= 2000){
//             value = Math.floor(value * 1.1)
//         }
//         return value
//     })
//     return result
// }
// console.log(salary(arr))

// 7
let students  = [
    {name:"Zafarbek", yoshi:17, ball:90},
    {name:"Okifxon", yoshi:17, ball:85},
    {name:"Shuhratbek", yoshi:17, ball:60},
    {name:"Saydilo", yoshi:17, ball:80},
    {name:"Ozodbek", yoshi:11, ball:20},
]
function findStudent(arr){
    let result = arr.find(function(value) {
        return value.ball >= 80
    })
    let sucess = arr.filter(function(value) {
        return value.ball >= 80
    })
    console.log(sucess);
    return (result.name, result.yoshi)
}
console.log(findStudent(students));