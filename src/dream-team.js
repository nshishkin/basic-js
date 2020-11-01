const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)){
    return false;
  }
  let arr = members.filter(item => typeof item === 'string');
  arr = arr.map(item => item.trim()[0].toUpperCase());
  return arr.sort().join('');
};