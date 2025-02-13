const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */ 
function getSeason(date) {
  if(!date){
    return 'Unable to determine the time of year!';
  }
  try{
    date.getFullYear();
  } catch(error){
    throw new Error('Invalid date!');
  }
    if(Object.getPrototypeOf(date) !== Object.getPrototypeOf(new Date())){
      throw new Error('Invalid date!');
    }

    try{
      year = date.getFullYear();
      monthIndex = date.getMonth();
      day = date.getDate();
      hours = date.getHours();
      minutes = date.getMinutes();
      seconds = date.getSeconds();
      milliseconds = date.getMilliseconds();
      let fake = new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds);
      if(date.getTime() !== fake.getTime()){
        throw new Error('Invalid date!');
      }
    } catch(error){
      throw new Error('Invalid date!');
    }
    
    let season = date.getMonth();
    if(season === 0 || season === 1 || season === 11){
      return('winter');
    }else if (season === 2 || season === 3 || season === 4){
      return('spring');
    }else if(season === 5 || season === 6 || season === 7){
      return('summer')
    } else if (season === 9 || season === 8 || season === 10) {
      return('fall')
    }
}

module.exports = {
  getSeason
};
