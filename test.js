function encodeLine(str) {
  let count = 1;
  const arr = str.split('');
  arr.reduce((prev,next) =>{
    if(prev === next){
      count ++;
      arr.splice(prev,count);
      prev = count + prev;
      arr.unshift(prev)
    }
  })
  console.log(arr)
 }

 console.log(encodeLine('aabbbc'));