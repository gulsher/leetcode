/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(!s.length) return 0;
    let left =0 ,right =0, set = new Set(), maxLength = -Infinity;

    while(right< s.length){
        if(!set.has(s[right])){
            set.add(s[right]);
            right ++;
            maxLength = Math.max(maxLength,set.size) 
        }else{
            set.delete(s[left]);
            left++
        }
    }
    return maxLength
};