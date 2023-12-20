function transform(arr) {
  if(!Array.isArray(arr)){
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }else if(arr.length === 0){
    return arr;
  }else{
    let newArr = [];
    newArr = arr.slice(0);
    for(let i = 0; i < newArr.length; i++){
      if(newArr[i] === '--double-next' && newArr[i + 2] === '--double-prev'){
        newArr[i] = newArr[i+1];
        newArr[i+2] = newArr[i+1];
        return newArr;
      }else if(newArr[i] === '--double-next' && newArr[i + 2] === '--discard-prev' ){
        newArr.splice( i , 1 );
        newArr.splice( i + 1 , 1 );
        return newArr;
      }else if(newArr[i] === '--double-next'){
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
          newArr.splice(i-1,2);
          return newArr;
        }
      }else if(newArr[i] === '--discard-next' && newArr[i+2] === '--double-prev' || newArr[i] === '--discard-next' && newArr[i+2] === '--discard-prev'){
        newArr.splice(i,3);
        return newArr;
      }else if (newArr[i] === '--discard-next'){
        if(newArr[newArr.length - 1] === '--discard-next'){
          newArr.pop();
          return newArr;
        }else{       
          newArr.splice(i,2);
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
      // }else if(newArr[i] !== '--double-prev' || newArr[i] !== '--discard-next' || newArr[i] !== '--discard-prev' || newArr[i] !== '--double-next'){
      //   return newArr;
      // }
    }
  }
  return arr;
}
console.log(transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5])); // [1, 2, 3, 4, 5]






console.log(transform([1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5]));





// transform(  [1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]);
// console.log(transform(  ['--double-prev','1', '--double-prev', 1]))
// console.log(transform(  [1, 2, 3, '--double-next']))


// function transform(arr) {
//   if (!Array.isArray(arr)) {
//     throw new Error(`'arr' parameter must be an instance of the Array!`);
//   } else if (arr.length === 0) {
//     return arr;
//   } else {
//     let newArr = arr.slice(0);
//     for (let i = 0; i < newArr.length; i++) {
//       if(newArr[i] === '--discard-next' || newArr[i] === '--discard-prev' || newArr[i] === '--double-next' || newArr[i] === '--double-prev'){
//         if (newArr[i] === '--discard-next' && newArr[i + 1] === undefined) {
//           newArr.splice(i, 2);
//         }
//         if (newArr[i] === '--discard-next' && newArr[i + 1] !== undefined) {
//           newArr[i + 1] = undefined;
//           newArr.splice(i, 1);
//         }
//         if (newArr[i] === '--discard-prev' && newArr[i - 1] === undefined) {
//           newArr.shift();
//         }
//         if (newArr[i] === '--discard-prev' && newArr[i - 1] !== undefined) {
//           newArr[i - 1] = undefined;
//           newArr.splice(i, 1);
//         }
//         if (newArr[i] === '--double-next') {
//           if (newArr[newArr.length - 1] === '--double-next') {
//             newArr.pop();
//           } else {
//             newArr[i] = newArr[i + 1];
//           }
//         }
//         if (newArr[i] === '--double-prev') {
//           if (newArr[i - 1] === undefined) {
//             newArr.shift();
//           } else {
//             newArr[i] = newArr[i - 1];
//           }
//         }
//         if(newArr[i] === undefined){
//           newArr.splice(i,1);
//         }
//       }
//     }
//     return newArr;
//   }
// }
// console.log(transform([1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5]));
