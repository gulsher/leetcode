/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let i=0;
    for(let j= s.length -1; j >=0; j--){
      if(i<j){
        let subStr = s.substring(i, j);
        subStr = reverseStr(subStr)
        if(s.includes(subStr)){
          return subStr
        }
      }
      i++;

    }
};

const reverseStr= (str) => (str.split("").reverse().join(""))

