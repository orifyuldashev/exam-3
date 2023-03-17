// 1. Ushbu ifodani hisoblovchi getSum(n) nomli funksiya tuzing: 1 * 2 + 2 * 3 + 3 * 4 + ... + (n - 1) * n;

// Input: 5
// // 1 * 2 + 2 * 3 + 3 * 4 + 4 * 5;
// Output: 40


// function getSum(n) {
//     let sum = 0;
//     for (let i = 1; i < n; i++) {
//         sum += i * (i + 1);
//     } 
//     return sum;
// }

// console.log(getSum(5));



// 2. Turli xil ma'lumot turlaridan tuzilgan massiv berilgan.
// Massiv qaytaradigan getSumDigits(arr) nomli funksiya tuzingki, bu massiv elementlari - parameter sifatida berilgan massivning elementlari raqamlari yi'gindisidan iborat bo'lsin.

//     Input: let arr = [1589, 31851, 512, 78, 180975];
// Output: [23, 18, 8, 15, 30]

// function getSumDigits(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         let sum = 0;
//         let num = arr[i];
//         while (num > 0) {
//             sum += num % 10;
//             num = Math.floor(num / 10);
//         }
//         result.push(sum);
//     }
//     return result;
// }

// let arr = [1589, 31851, 512, 78, 180975];
// console.log(getSumDigits(arr));


// 3. Products massivi hamda mahsulotlar id sidan iborat massiv berilgan.
// Id lar massivi ichidagi mahsulotlar narxlari yi'gindisi getTotalPrice(products, ids) funksiyasi tuzilsin.

// Input: let ids = [1, 4, 8];
// const products = [
//     { id: 1, name: 'Bike', price: 100 },
//     { id: 2, name: 'TV', price: 400 },
//     { id: 3, name: 'Album', price: 800 },
//     { id: 4, name: 'Book', price: 600 },
//     { id: 5, name: 'Phone', price: 500 },
//     { id: 6, name: 'Computer', price: 1000 },
//     { id: 7, name: 'Skate', price: 300 },
//     { id: 8, name: 'Keyboard', price: 200 },
//     { id: 9, name: 'Bottle', price: 700 },
// ];
// // getTotalPrice(ids, products)
// Output: 900

// function getTotalPrice(products, ids) {
//     let totalPrice = 0;
//     for (let i = 0; i < products.length; i++) {
//         if (ids.includes(products[i].id)) {
//             totalPrice += products[i].price;
//         }
//     }
//     return totalPrice;
// }

// const ids = [1, 4, 8];
// const products = [
//     { id: 1, name: 'Iphone 12 Pro Max', price: 100 },
//     { id: 2, name: 'TV', price: 400 },
//     { id: 3, name: 'Album', price: 800 },
//     { id: 4, name: 'Book', price: 600 },
//     { id: 5, name: 'Phone', price: 500 },
//     { id: 6, name: 'Computer', price: 1000 },
//     { id: 7, name: 'Skate', price: 300 },
//     { id: 8, name: 'Keyboard', price: 200 },
//     { id: 9, name: 'Iphone XS', price: 700 },
// ];

// console.log(getTotalPrice(products, ids)); // Output: 900

// 4. Satrdagi undoshlar va unlilar soni o’rtasidagi farqni topuvchi getDif() funksiya tuzilsin.

//     Input: let str = "Men kelajakda kuchli dasturchi bo'laman";
// // getDif(str)
// Output: 8


// function getDif(str) {
//     let vowels = ['a', 'e', 'i', 'o', 'u'];
//     let strVowels = 0;
//     let strConsonants = 0;

//     for (let i = 0; i < str.length; i++) {
//         let char = str[i].toLowerCase();
//         if (vowels.includes(char)) {
//             strVowels++;
//         } else if (/[a-z]/.test(char)) {
//             strConsonants++;
//         }
//     }

//     return Math.abs(strVowels - strConsonants);
// }

// let str = "Mening ismim Orif Men kelajakda kuchli dasturchi bo'laman";
// console.log(getDif(str));




// 5. Sonlardan iborat massiv argument sifatida kiritilganda, kalitlari o’sha sonlardan, qiymati esa ularning necha xonali ekanligidan iborat bo’lgan
// object qaytaradigan getNumberDigit(arr) funksiya tuzilsin.

//     Input: [10, 453, 89, 589, 9034, 28574, 184, 73901, 5];
// Output:
// {
//     '10': 2,
//         '453': 3,
//             '89': 2,
//                 '589': 3,
//                     '9034': 4,
//                         '28574': 5,
//                             '184': 3,
//                                 '73901': 5
//     '5': 1,
// }

// function getNumberDigit(arr) {
//     let result = {};
//     for (let i = 0; i < arr.length; i++) {
//         let num = arr[i];
//         let digitCount = num.toString().length;
//         result[num] = digitCount;
//     }
//     return result;
// }

// let arr = [10, 453, 89, 589, 9034, 28574, 184, 73901, 5];
// console.log(getNumberDigit(arr));



// 6. Object ichidagi truthy va falsy qiymatga ega propertylardan alohida objectlar tuzilsin.

//     Input: obj = {
//         a: false,
//         b: 12,
//         c: '',
//         d: "salom",
//         e: 102,
//         f: null,
//         g: -1
//     }
// Output:
// falsy: { a: false, c: '', f: null }
// truthy: { b: 12, d: "salom", e: 102, g: -1 }


// function separateTruthyFalsy(obj) {
//     let truthy = {};
//     let falsy = {};
//     for (let key in obj) {
//         if (obj[key]) {
//             truthy[key] = obj[key];
//         } else {
//             falsy[key] = obj[key];
//         }
//     }
//     return { truthy, falsy };
// }

// let obj = {
//     a: false,
//     b: 12,
//     c: '',
//     d: "salom",
//     e: 102,
//     f: null,
//     g: -1
// };

// let result = separateTruthyFalsy(obj);
// console.log("truthy: ", result.truthy);
// console.log("falsy: ", result.falsy);



// 7. Yonidagi qo’shnilarining yig'indisidan iborat yangi massiv qaytaruvchi getCloseSum(arr) funksiya tuzilsin.

// Input: [10, 5, 7, 8, 11, 3, 1, 6];
// Output: [15, 22, 20, 26, 22, 15, 10, 7]


// function getCloseSum(arr) {
//     const newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         let sum = 0;
//         for (let j = 0; j < arr.length; j++) {
//             if (j !== i) {
//                 sum += arr[j];
//             }
//         }
//         newArr.push(sum);
//     }
//     return newArr;
// }

// const arr = [10, 5, 7, 8, 11, 3, 1, 6];
// console.log(getCloseSum(arr));


// 8 Satrdagi eng uzun va eng qisqa so'zlarni uzunligini ayirmasini qaytaruvchi getDifMaxMin(str) funksiya tuzing

// Input: let str =
//     "Satrdagi eng uzun va eng qisqa so'zlarni uzunligini ayirmasini qaytaruvchi funksiya tuzing";
// // min_word: va
// // max_word: qaytaruvchi
// // getDifMaxMin(str)
// Output: 9

// function getDifMaxMin(str) {
//     let words = str.split(' ');
//     let min_word = words[0];
//     let max_word = words[0];
//     for (let i = 0; i < words.length; i++) {
//         if (words[i].length < min_word.length) {
//             min_word = words[i];
//         }
//         if (words[i].length > max_word.length) {
//             max_word = words[i];
//         }
//     }
//     return max_word.length - min_word.length;
// }

// let str = "Satrdagi eng uzun va eng qisqa so'zlarni uzunligini ayirmasini qaytaruvchi funksiya tuzing";
// let result = getDifMaxMin(str);
// console.log(result);

//// 10 ///
// Book nomli contructor yarating uning title, pages, author kabi xususiyatlari bo'lsin. getInfo() nomli prototypega method yozing.

// Input: let b1 = new Book("Halqa", 200, "Akrom Malik");
// // p1.getInfo();
// Output: "200 betlik Halqa kitobi Akrom Malik tomonidan yozilgan."




// class Book {
//     constructor(title, pages, author) {
//         this.title = title;
//         this.pages = pages;
//         this.author = author;
//     }

//     getInfo() {
//         return `${this.pages} betlik ${this.title} kitobi ${this.author} tomonidan yozilgan.`;
//     }
// }

// let b1 = new Book("Halqa", 200, "Akrom Malik");
// console.log(b1.getInfo()); 
