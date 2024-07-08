/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    
    
  let i = 0;
        let j = 0;
        let sum = 0;
        let min = Number.POSITIVE_INFINITY;
        while(j<nums.length) {
            sum += nums[j];
            if(sum < target){
            j++;
            }
            else {
                while(sum >= target) {
                    min = Math.min(min,(j-i+1));
                    sum -= nums[i];
                    i++;
                }
                j++;
            }
        }
        if(i==0) {
            return 0;
        }
        return min;
    }
