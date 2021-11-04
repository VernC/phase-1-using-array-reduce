const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
// // Code your solution here
//-----------------------------
//Correct
const totalBatteries = batteryBatches.reduce(function(accumulator, element){ return element + accumulator})
console.log(totalBatteries)
// ==========================
// //This is off of MDN... What am I doing wrong?
// const totalBatteries = (previousValue, currentValue) => previousValue + currentValue;

// console.log(batteryBatches.reduce(totalBatteries));