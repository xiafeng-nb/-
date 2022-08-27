var dailyTemperatures = function(temperatures) {
    var answer=new Array(temperatures.length).fill(0);
    var len=temperatures.length;
    for(let i=0;i<len;i++){
        var left=temperatures[i];
        for(let j=i+1;j<len;j++){
            if(temperatures[j]>left){
                answer[i]=j-i;
                break;
            }
        }
    }
    return answer;
};