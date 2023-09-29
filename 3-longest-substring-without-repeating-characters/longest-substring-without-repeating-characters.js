/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (!s.length) return 0;
  
  let left = 0, right = 0;
  let maxLength = -Infinity;
  const set = new Set();

  while (right < s.length) {
    // If s[right] has not been seen yet
    if (!set.has(s[right])) {
      // Add it to the set
      set.add(s[right]);
      // Increase size of window to right
      right++;
      // Update maxLength; set size represents length of unique substring
      maxLength = Math.max(maxLength, set.size);
    } else {
      // We've seen s[right] so we need to shrink the window
      // Delete s[left] from set
      set.delete(s[left]);
      // Shrink window from left
      left++;
    }
  }

  return maxLength;
};