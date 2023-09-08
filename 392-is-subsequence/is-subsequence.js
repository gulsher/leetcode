/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    s = s.split("");
    t = t.split("");
    let m = s.length;
    let n = t.length;
    let matching = 0;
    if(m == 0) return true
    
    for(let i=0; i< n; i++){
        if(s[matching] == t[i]){
            matching = matching +1
        }
    }

   if(matching == m) return true
   return false

};