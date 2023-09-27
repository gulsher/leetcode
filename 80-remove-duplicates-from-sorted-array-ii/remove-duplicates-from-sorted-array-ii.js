/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
        let existingValue = nums[0];
    let appearance = 1; 
    for(i=1; i<=nums.length-1; i++) {
        if(existingValue == nums[i]) {
            if(appearance >= 2) {
                nums.splice(i,1)
                i--
            }
            appearance++;
        }
        else {
            existingValue = nums[i];
            appearance = 1
        }
    }
};