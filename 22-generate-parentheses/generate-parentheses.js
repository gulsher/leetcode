/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const solution =[];
    const generateCombo = (leftPCount,rightPCount,str) =>{
        if(leftPCount> rightPCount) return
        if(!leftPCount && !rightPCount) solution.push(str);
        if(leftPCount>0) generateCombo(leftPCount -1 ,rightPCount, str + "(");
        if(rightPCount>0) generateCombo(leftPCount  ,rightPCount-1, str + ")")
    }


    generateCombo(n,n,"");
    return solution;
};