// 1. Ushbu ifodani hisoblovchi getSum(n) nomli funksiya tuzing: 1 * 2 + 2 * 3 + 3 * 4 + ... + (n - 1) * n;

// Input: 5
// // 1 * 2 + 2 * 3 + 3 * 4 + 4 * 5;
// Output: 40


function getSum(n) {
    let sum = 0;
    for (let i = 1; i < n; i++) {
        sum += i * (i + 1);
    }
    return sum;
}

console.log(getSum(5));



// 2. Turli xil ma'lumot turlaridan tuzilgan massiv berilgan.
// Massiv qaytaradigan getSumDigits(arr) nomli funksiya tuzingki, bu massiv elementlari - parameter sifatida berilgan massivning elementlari raqamlari yi'gindisidan iborat bo'lsin.

//     Input: let arr = [1589, 31851, 512, 78, 180975];
// Output: [23, 18, 8, 15, 30]

function getSumDigits(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        let num = arr[i];
        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        result.push(sum);
    }
    return result;
}

let arr = [1589, 31851, 512, 78, 180975];
console.log(getSumDigits(arr));


