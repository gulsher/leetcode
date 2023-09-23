/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    x = x.toString().split("")
  return  JSON.stringify(x) === JSON.stringify(x.reverse())
    
};