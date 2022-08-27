var uniquePaths = function(m,n){
    var arr=new Array(m).fill(0).map(()=>new Array(n).fill(0));
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(i==0||j==0){
                arr[i][j]=1;
            }else{
                arr[i][j]=arr[i-1][j]+arr[i][j-1];
            }
        }
    }
    return arr[m-1][n-1];
}

var uniquePathsWithObstacles = function(obstacleGrid) {
    var m=obstacleGrid.length,n=obstacleGrid[0].length;
    var arr=new Array(m).fill(0).map(()=>new Array(n).fill(0));
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(obstacleGrid[i][j]!==1){
                if(i==0&&j==0){
                    arr[i][j]=1;
                }else if(i==0){
                    arr[i][j]=arr[0][j-1];
                }else if(j==0){
                    arr[i][j]=arr[i-1][0];
                }else{
                    arr[i][j]=arr[i-1][j]+arr[i][j-1];
                }
            }else{
                arr[i][j]=0;
            }
        }
    }
    return arr[m-1][n-1];
};