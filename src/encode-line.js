const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let count = 1;
  let newArr = [];
  let arr = str.split('');

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      count++;
    } else {
      if (count > 1) {
        newArr.push(count);
      }
      newArr.push(arr[i]);
      count = 1; 
    }
  }
  return newArr.join('');
}

module.exports = {
  encodeLine
};
