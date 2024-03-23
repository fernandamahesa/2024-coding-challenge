//WPU Coding Challenge 2024
//21/366
// https://www.codewars.com/kata/568d0dd208ee69389d000016

// function rentalCarCost(d) {
//   let disc = 0;
//   if (d >= 7) {
//     disc = 50;
//   } else if (d >= 3) {
//     disc = 20;
//   }
//   return d * 40 - disc;
// }

const rentalCarCost = (d) => d * 40 - (d >= 7 ? 50 : d >= 3 ? 20 : 0);

console.log(rentalCarCost(10));
