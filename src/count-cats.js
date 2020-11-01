const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let counter = 0;
  matrix.forEach(element => {
    element.forEach(item => {
      if(item === '^^'){
        counter += 1;
      }
    })
  });
  return counter;
};
