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
console.log(encodeLine('aaaatttt'));
