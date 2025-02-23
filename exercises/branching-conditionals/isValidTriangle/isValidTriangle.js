/**
 * Given three numbers, returns true is a triangle exists with those three
 * numbers as side lengths, and false otherwise.
 *
 * @param {number} a Side length #1
 * @param {number} b Side length #2
 * @param {number} c Side length #3
 * @returns {boolean} True if a triangle exists with side lengths of a, b, and c. Returns false otherwise.
 */
function isValidTriangle(a, b, c) {
 let arr = [a, b, c];
 arr.sort();
 return arr[2] < arr[1] + arr[0];
}

if (require.main === module) {
  console.log('Running sanity checks for isValidTriangle:');

  // The order of the arguments should not matter.
  console.log(isValidTriangle(3, 4, 5) === true);
  console.log(isValidTriangle(3, 5, 4) === true);
  console.log(isValidTriangle(4, 3, 5) === true);
  console.log(isValidTriangle(4, 5, 3) === true);
  console.log(isValidTriangle(5, 3, 4) === true);
  console.log(isValidTriangle(5, 4, 3) === true);

  // False case
  console.log(isValidTriangle(1,7,3) === false);

  // Add your own sanity checks here. Test negative cases.
  // How else will you be sure your code does what you think it does?
}

module.exports = isValidTriangle;
