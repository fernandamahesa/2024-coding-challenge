//WPU Coding Challenge 2024
//1/366
//https://www.codewars.com/kata/57f780909f7e8e3183000078

// function grow(x) {
//   let result = x[0];
//   for (let i = 1; i < x.length; i++) {
//     result *= x[i];
//   }
//   return result;
// }

// console.log(grow([1, 2, 3, 4]));
// ===================================================

// higher order function,
// reduce : sebuah fungsi dalam js untuk melakukan proses perubahan nilai pada array yg disebut dengan reducer untuk menghasilkan satu nilai dari banyak nilai dalam array

// function declaration

// function grow(x) {
//   const result = x.reduce((acc, curr) => acc * curr, 1);
//   return result;
// }
// console.log(grow[(1, 2, 3)]);
// ===================================================

// function expression

const grow = (x) => x.reduce((acc, curr) => acc * curr, 1);
