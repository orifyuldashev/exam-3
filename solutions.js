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

function getTotalPrice(products, ids) {
    let totalPrice = 0;
    for (let i = 0; i < products.length; i++) {
        if (ids.includes(products[i].id)) {
            totalPrice += products[i].price;
        }
    }
    return totalPrice;
}

const ids = [1, 4, 8];
const products = [
    { id: 1, name: 'Bike', price: 100 },
    { id: 2, name: 'TV', price: 400 },
    { id: 3, name: 'Album', price: 800 },
    { id: 4, name: 'Book', price: 600 },
    { id: 5, name: 'Phone', price: 500 },
    { id: 6, name: 'Computer', price: 1000 },
    { id: 7, name: 'Skate', price: 300 },
    { id: 8, name: 'Keyboard', price: 200 },
    { id: 9, name: 'Bottle', price: 700 },
];

console.log(getTotalPrice(products, ids));



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


