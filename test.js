// function renameFiles(names) {
//   let i = 1;
//   names.forEach((elem,index) => {
//     if(elem === names[index + 1]){
//       names[index + 1] += `(${i})`;
//       i++
//     } else if(elem === `names[index + 1](${1})`){
//       names[index + 1] += '(1)'
//     }
//   });
//   return names;
// }

function renameFiles(names) {
  for (let index = 0; index < names.length; index++) {
    const elem = names[index];
    let count = 1;
    for (let j = index + 1; j < names.length; j++) {
      if (names[j] === elem) {
        const newName = `${elem}(${count})`;
        names[j] = newName;
        count++;
      }
    }
  }
  
  return names;
}


console.log(renameFiles(["file", "file", "image", "file(1)", "file"]))