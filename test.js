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
        console.log(newArr[newArr.length - 1])
        if(newArr.length - 1 === '--double-next'){
          newArr.pop();
          console.log(newArr)
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
        console.log(newArr.length -1)
        if(newArr.length - 1 === '--discard-next'){
          newArr.pop();
          console.log(newArr)
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

transform( [1, 2, 3, '--double-next']);