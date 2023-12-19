// function getSeason(date) {
//   if(Object.getPrototypeOf(date) === Object.getPrototypeOf(new Date())){
//     let season = date.getMonth();
//     if(season === 0 || season === 1 || season === 11){
//       return('winter');
//     }else if (season === 2 || season === 3 || season === 4){
//       return('spring');
//     }else if(season === 5 || season === 6 || season === 7){
//       return('summer')
//     } else if (season === 9 || season === 8 || season === 10) {
//       return('fall')
//     }
    
//     } else {throw new Error('Invalid date!');}
// }

// getSeason(new Date(481, 5, 5, 21, 58, 37, 272));
const date = new Date(481, 1, 5, 21, 58, 37, 272);
// console.log(Object.getPrototypeOf(Date()));
// console.log(Object.getPrototypeOf(new Date()));
console.log(typeof date);
console.log(date.getFullYear() + date.getMonth() + date.getDay() + date.getHours() + date.getMinutes() + date.getSeconds() + date.getMilliseconds());
