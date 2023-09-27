/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let multiply =[];
    let tempMult ='';
    let repeatStr = [];
    let solution = ''
    
    for(let char of s){
        if(!isNaN(char)){
            tempMult = `${tempMult}${char}`;
            
        }else if(char == '['){
            multiply.push(tempMult);
            tempMult ='';
            repeatStr.push(solution);
            solution = ''
        }else if(char == ']'){
            solution = repeatStr.pop() + solution.repeat(multiply.pop())
        }
        else{
            solution = solution + char
        }
    }
    return solution
};