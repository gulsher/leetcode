/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

let buy = prices[0];
prices[0] = 0;
let profit = 0;
for(let i=1;i<prices.length;i++){
    buy = Math.min(buy, prices[i]);
        profit = Math.max(profit, prices[i] - buy);
}

return profit
};