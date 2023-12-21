function getSumOfDigits(n) {
  let arr = n.toString().split('');
  let sum = arr.reduce((prev, current) => {
    return prev + Number(current);
  }, 0);

  if (sum < 10) {
    return sum;
  } else {
    return getSumOfDigits(sum);
  }
}

console.log(getSumOfDigits(91)); // Вывод: 1
