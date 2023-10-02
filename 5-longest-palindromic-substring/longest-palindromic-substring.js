/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if(s.length<2) return s;
    
    let longest = "";
    
    function isPal(left,right){
        while(s[left]===s[right] && left >=0 && right<s.length){
            left--;
            right++;
        }
        return s.slice(left+1,right)
    }
    
    for(let i=0;i<s.length;i++){
     let oddPal = isPal(i,i);
     let evenPal = isPal(i,i+1);
        
   let longestPal = oddPal.length > evenPal.length ? oddPal : evenPal;
     if(longestPal.length> longest.length){
         longest = longestPal
     }   
    };
    return longest;
};

