const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)){
      throw new Error();
  }
  if (arr.length === 0){
      return [];
  }
  let resultArr =[];
  for (let i = 0; i < arr.length; i += 1){
      if (i >= 1 && arr[i] === '--discard-prev'){
          resultArr.pop();
      } else if (i < arr.length - 1 && arr[i] === '--double-next'){
          resultArr.push(arr[i + 1]);
      } else if (i >= 1 && arr[i] === '--double-prev'){
          resultArr.push(arr[i - 1]);
      }else if(arr[i]=== '--discard-next'){
          i = i + 1;
      }
      else if (arr[i] !== '--discard-prev' && arr[i] !== '--double-next' && arr[i] !== '--double-prev' && arr[i]!== '--discard-next'){
          resultArr.push(arr[i]);
      }         
  }
  return resultArr;
};

