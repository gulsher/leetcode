/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let obj = {};
    if(nums.length){
        for(let num of nums){
            if(obj[num]){
               return true
            }else{
                obj[num] = (obj[num] || 0) + 1 
            }
        }
        return false
    }
    return false
};