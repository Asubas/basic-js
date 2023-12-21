const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let result = {};
  if(domains.length === 0){
    return {};
  } else {
    domains.forEach(element => {
      let dns = element.split('.');
      let currentDns = '';
      for(let j = dns.length - 1; j >= 0; j--){
        currentDns =currentDns + '.' + dns[j];
        if(result[currentDns]){
          result[currentDns] += 1;
        }else{
          result[currentDns] = 1;
        }
      }  
    });  
  }
  return result;
}

module.exports = {
  getDNSStats
};
