const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 function getCommonCharacterCount(s1, s2) {
  let firstArr = s1.split('');
  let secondArr = s2.split('');
  let count = 0;
  if (firstArr.length === 0 || secondArr.length === 0) {
    return 0;
  } else {
    for (let i = 0; i < firstArr.length; i++) {
      let current = secondArr.indexOf(firstArr[i]);
      if (current !== -1) {
        secondArr.splice(current, 1);
        count++;
      }
    }
    return count;
  }
}
module.exports = {
  getCommonCharacterCount
};
