// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// my solution

function reverseInt(n) {
  let result = null;
  let newNum = n.toString()
  let numString = '';

  if (n < 0) {
    for (let i = newNum.length - 1; i >= 0; i--){
      let num = newNum.charAt(i);
      numString += num
    }
    result = parseInt(numString.substring(0, numString.length - 1)) * -1
    return result;
  } else {
    for (let i = newNum.length - 1; i >= 0; i--){
      let num = newNum.charAt(i);
      numString += num
    }
    result = parseInt(numString);
    return result
  }
}

// a lot cleaner solution

function reverseInt(n){
  const reversed = n.toString().split('').reverse().join('');

  return parseInt(reversed) * Math.sign(n);
}

reverseInt(-521)

module.exports = reverseInt;
