//WPU Coding Challenge 2024
//9/366
// https://www.codewars.com/kata/577a98a6ae28071780000989

// function min(list) {
//   let minValue = list[0];
//   for (let i = 1; i <= list.length; i++) {
//     if (minValue > list[i]) {
//       minValue = list[i];
//     }
//   }
//   return minValue;
// }

// function max(list) {
//   let maxValue = list[0];
//   for (let i = 1; i <= list.length; i++) {
//     if (maxValue < list[i]) {
//       maxValue = list[i];
//     }
//   }
//   return maxValue;
// }

// const min = (list) => list.sort((a, b) => a - b)[0];
// const max = (list) => list.sort((a, b) => b - a)[0];

const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);

console.log(min([-10, 2, 5, -20]));
console.log(max([10, 5, -10, 100]));
