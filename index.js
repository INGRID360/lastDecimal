'use strict';

/**
 * Increase or decrease last decimal
 * @param {number} number
 * @param {bool} option
 * @return {string}
 */
module.exports = function(number, option) {

    let i;
    let container;
    let sum;
  
    container = val.toString();
    const numDec = container.split('.')[1].length;
    // If true
    if (bool === true) {
      sum = val - Math.pow(10, -numDec);
    } else {
      sum = val + Math.pow(10, -numDec);
    }
    sum = sum.toFixed(numDec);
  
    return sum;
  
};