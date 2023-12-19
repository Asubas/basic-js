const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let arrTeam = [];
  if (!Array.isArray(members)) {
    return false;
  }
  members.forEach(name => {
    if(typeof name === 'string'){
      arrTeam.push(name.trim()[0].toUpperCase());
    } return false;
  });
  let stringTeam = arrTeam.sort().join('');
  return stringTeam;
}

module.exports = {
  createDreamTeam
};
