// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let countBot = {};
  let max = 0;
  let maxChar = '';

  for (var i = 0; i < str.length; i++) {
    let char = str[i];
    if (countBot[char] === undefined){
      countBot[char] = 1;
    } else {
      countBot[char] += 1;
    }
  }
  for (let char in countBot) {
    if (countBot[char] > max){
      max = countBot[char];
      maxChar = char;
    }
  }
  return maxChar;
}

maxChar("abcccccccd");

module.exports = maxChar;
