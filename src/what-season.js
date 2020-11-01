const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (typeof date === 'undefined'){
    return 'Unable to determine the time of year!';
  }
  if (!(date instanceof Date) || (+date.toString().split(' ')[3] != date.getFullYear())){
    throw Error;
  }
  months = [
    'winter',
    'winter',
    'spring',
    'spring',
    'spring',
    'summer',
    'summer',
    'summer',
    'autumn',
    'autumn',
    'autumn',
    'winter',
  ];
  return months[date.getMonth()];
};