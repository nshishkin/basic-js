const CustomError = require("../extensions/custom-error");

const chainMaker = {
  getLength(chain) {
    return chain.split(this.separator).length;
  },

  addLink(value = '') {
    this.chain +=  (this.chain !== '') ?  `${this.separator}( ${value} )` : `( ${value} )`;
    return this;
  },

  removeLink(position) {
    let chainArr = this.chain.split(this.separator);
      let pos = position-1;

    if (typeof chainArr[pos] === 'undefined' || typeof pos !== 'number' || !isFinite(pos)){
        this.chain = '';
        throw Error;
    }
    chainArr.splice(pos, 1);
    this.chain = chainArr.join(this.separator);
    return this;
      
  },

  reverseChain() {
    let chainArr = this.chain.split(this.separator);
    let reversedChainArr = chainArr.reverse();
    this.chain = reversedChainArr.join(this.separator);
    return this;
      
  },

  finishChain() {
      let chain = this.chain;
      this.chain = '';
      return chain;
  },

  chain : '',
  separator: '~~',

};
module.exports = chainMaker;