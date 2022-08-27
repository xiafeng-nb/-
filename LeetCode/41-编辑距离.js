var minDistance = function(word1, word2) {
    var row=word1.length,col=word2.length;
    var dp=new Array(row+1).fill(0).map(()=>new Array(col+1).fill(0));
    for(let i=0;i<=row;i++){
        dp[i][0]=i;
    }
    for(let i=0;i<=col;i++){
        dp[0][i]=i;
    }
    for(let i=1;i<=row;i++){
        for(let j=1;j<=col;j++){
            if(word1[i]==word2[j]){
                dp[i][j]=dp[i-1][j-1];
            }else{
                dp[i][j]=Math.min(dp[i][j-1],dp[i-1][j],dp[i-1][j-1])+1;
            }
        }
    }
    return dp[row][col];
};
console.log(minDistance('hor','roas'));