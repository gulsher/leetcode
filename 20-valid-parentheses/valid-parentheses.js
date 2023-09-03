/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let pairs = {
        "(": ")",
        "[" : "]",
        "{" : "}"
    }
    let heap =[];
    
    for(let char of s){
        if(pairs[char]){
            heap.push(pairs[char])
        }else{
            if(heap.pop() !== char ){
                return false
            }
        }
    }
    return (!heap.length)
};