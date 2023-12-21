function sortByHeight(arr) {
  let newArr = arr.filter(item => item !== -1);
  newArr.sort((a, b) => a - b);
  let index = 0;
  let sortArr = arr.map(item => {
    if (item === -1) {
      return -1;
    } else {
      return newArr[index++];
    }
  });

  return sortArr;
}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));