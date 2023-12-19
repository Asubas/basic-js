const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(!Array.isArray(arr)){
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }else if(arr.length === 0){
    return arr;
  }else{
    let newArr = [];
    newArr = arr.slice(0);
    for(let i = 0; i < newArr.length; i++){
      if(newArr[i] === '--double-next'){
        if(newArr[newArr.length - 1] === '--double-next'){
          newArr.pop();
          return newArr;
        }else{
          newArr[i] = newArr[i+1];
          return newArr;
        }

      }else if(newArr[i] === '--discard-prev'){
        if(newArr[i-1] === undefined){
          newArr.shift();
          return newArr;
        }else{
          newArr.splice(newArr[i-1],2);
          return newArr;
        }
      }else if (newArr[i] === '--discard-next'){
        if(newArr[newArr.length - 1] === '--discard-next'){
          newArr.pop();
          return newArr;
        }else{       
          newArr.splice(newArr[i],2);
          return newArr;
        }
      }else if(newArr[i] === '--double-prev'){
        if(newArr[i-1] === undefined){
          newArr = newArr.slice(0);
          newArr.shift();
          return newArr;
        }else{
          newArr[i] = newArr[i-1];
          return newArr;
        }
        
      }
    }
  }return arr;
}

module.exports = {
  transform
};



// function transform(arr) {
//   let newArr = [];
//   if(!Array.isArray(arr)){
//     throw new Error(`'arr' parameter must be an instance of the Array!`);
//   }else if(arr.length === 0){
//     return arr;
//   }else{
//     for(let i = 0; i < arr.length; i++){
//       if(arr[i] === '--double-next'){
//         arr[i] = arr[i+1];
//         return arr;
//       }else if(arr[i] === '--discard-prev'){
//         if(arr[i-1] === undefined){
//           newArr = arr.slice(0);
//           newArr.shift();
//           return newArr;
//         }else{
//           arr.splice(arr[i-1],2);
//           return arr;
//         }
//       }else if (arr[i] === '--discard-next'){
//         arr.splice(arr[i],2);
//         return arr;
//       }else if(arr[i] === '--double-prev'){
//         arr[i] = arr[i-1];
//         return arr;
//       }
//     }
//   }return arr;
// }

// module.exports = {
//   transform
// };
