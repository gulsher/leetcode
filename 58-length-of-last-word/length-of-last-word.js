/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s =s.trim()
    let str = s.split(" ");
    
    return str[str.length-1].length
};