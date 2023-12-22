const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  // let newStr = '';
  // if (typeof str !== 'string'){
  //   str = str.toString();
  // }
  // if(options['addition']){
  //   if(typeof options['addition'] !== 'string'){
  //     options['addition'] = options['addition'].toString();
  //   }
  // }
  // if (typeof options['repeatTimes'] === 'number' && options['repeatTimes'] > 0 && !options['separator']) {
  //   newStr = str;
  //   for (let i = 1; i < options['repeatTimes']; i++) {
  //       newStr += '+' + str;
  //   }
  // }else if(options['repeatTimes'] > 0 && options['separator']){
  //   newStr = str;
  //   for (let i = 1; i < options['repeatTimes']; i++) {
  //     newStr += options['separator'] + str;
  // }
  // }
  // if(options['repeatTimes'] && options['separator'] && options['addition'] && options['additionRepeatTimes']){
  //   repeat();
  // }

  // return newStr;

  // function repeat(){
  //   newStr = str;
  //   for (let i = 1; i < options['repeatTimes']; i++) {
  //     if(!options['addition']){
  //     newStr += options['separator'] + str;
  //     }else if(options['addition'] && options['additionRepeatTimes']){
  //       for (let i = 0; i < options['additionRepeatTimes']; i++){
  //       newStr =newStr + options['separator'] + str + options['addition'];
  //       }
  //     }
  // }
  // }
}

module.exports = {
  repeater
};
