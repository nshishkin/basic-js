const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string'){
    return false;
  }
  let currentActivity = parseFloat(sampleActivity);
  if (isNaN(currentActivity) || currentActivity > 1000 || currentActivity <0){
    return false;
  }
  let result = Math.ceil(Math.log(MODERN_ACTIVITY/currentActivity)/(0.693/HALF_LIFE_PERIOD));
  if (result < 0 || result > 1000000 || isNaN(result)){
    return false;
  }
  return result;
};
