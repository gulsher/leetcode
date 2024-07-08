/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function(s) {
    let temp = s.split("").sort().join("");
    if(s == temp){
        return true
    }else{
        return false
    }
};