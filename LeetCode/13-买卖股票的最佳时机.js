var maxProfit = function(prices) {
    var max=0;
    var min=prices[0]
    for(let i=0;i<prices.length;i++){
        max=Math.max(prices[i]-min,max);
        min=Math.min(prices[i],min);
    }
    return max;
};

var maxProfit2 = function(prices) {
    var max=0;
    var pro=0;
    for(let i=1;i<prices.length;i++){
        pro=Math.max(prices[i]-prices[i-1],0);
        max+=pro;
    }
    return max;
};