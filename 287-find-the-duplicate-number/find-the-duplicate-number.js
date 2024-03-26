/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
     let obj={}
    for(let num of nums){
        obj[num]=(obj[num]||0)+1
        if(obj[num]==2) return num
    }
};