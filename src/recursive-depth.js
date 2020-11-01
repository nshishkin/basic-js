const CustomError = require("../extensions/custom-error");

let maxDepth = 0;
module.exports = class DepthCalculator {
    calculateDepth(arr, curDepth = 1) {
        arr.forEach(el => {
            if(Array.isArray(el)){
                maxDepth = this.calculateDepth(el, curDepth + 1);
            }   
        });

        maxDepth = (maxDepth > curDepth) ? maxDepth : curDepth;

        let depth = maxDepth;
        maxDepth = 0;

        return depth;
    }
};