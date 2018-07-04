
function sum(fromN, toN) {
  if (fromN === toN) {
    return fromN;
  }
  return fromN += sum(fromN +1, toN);
}

module.exports = sum;


//starting at fromN, add +1 until the number is = toN

// function sumToOne(n) {
//   if (n === 1) {
//       return 1;
//   }
//   return n + sumToOne(n - 1)
// }

// console.log(sumToOne(4));