// function transform(arr) {
//   if(!Array.isArray(arr)){
//     throw new Error(`'arr' parameter must be an instance of the Array!`);
//   }else if(arr.length === 0){
//     return arr;
//   }else{
//     let newArr = [];
//     newArr = arr.slice(0);
//     for(let i = 0; i < newArr.length; i++){
//       if(newArr[i] === '--double-next'){
//         if(newArr[newArr.length - 1] === '--double-next'){
//           newArr.pop();
//           return newArr;
//         }else{
//           newArr[i] = newArr[i+1];
//           return newArr;
//         }

//       }else if(newArr[i] === '--discard-prev'){
//         if(newArr[i-1] === undefined){
//           newArr.shift();
//           return newArr;
//         }else{
//           newArr.splice(newArr[i-1],2);
//           return newArr;
//         }
//       }else if(newArr[i] === '--discard-next' && newArr[i+2] === '--double-prev' || newArr[i] === '--discard-next' && newArr[i+2] === '--discard-prev'){
//         newArr.splice(i,3);
//         return newArr;
//       }else if (newArr[i] === '--discard-next'){
//         if(newArr[newArr.length - 1] === '--discard-next'){
//           newArr.pop();
//           return newArr;
//         }else{       
//           newArr.splice(i,2);
//           return newArr;
//         }
//       }else if(newArr[i] === '--double-prev'){
//         if(newArr[i-1] === undefined){
//           newArr = newArr.slice(0);
//           newArr.shift();
//           return newArr;
//         }else{
//           newArr[i] = newArr[i-1];
//           return newArr;
//         }
        
//       }
//     }
//   }return arr;
// }

// // transform(  [1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]);
// console.log(transform(  [ 3, '--double-next', '1']))

function getCommonCharacterCount(s1, s2) {
  let firstArr = s1.split('');
  let secondArr = s2.split('');
  let count = 0;
  if (firstArr.length === 0 || secondArr.length === 0) {
    return 0;
  } else {
    for (let i = 0; i < firstArr.length; i++) {
      let index = secondArr.indexOf(firstArr[i]);
      if (index !== -1) {
        secondArr.splice(index, 1);
        count++;
      }
    }
    return count;
  }
}
console.log(getCommonCharacterCount('aabcc', 'adcaa'));


console.log(getCommonCharacterCount('aabcc', 'adcaa'));
