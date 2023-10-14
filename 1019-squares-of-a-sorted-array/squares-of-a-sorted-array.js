/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let solution = [];
    for(let i=0;i<nums.length;i++){
        solution.push(nums[i]*nums[i])
    }
    return solution.sort((a,b)=>a-b)
};