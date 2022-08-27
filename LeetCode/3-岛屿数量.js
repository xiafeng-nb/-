var numIslands = function(grid) {
    var num=0;
    var m=grid.length,n=grid[0].length;
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(grid[i][j]==1){
                dfs(grid,i,j,m,n);
                num++;
            }
        }
    }
    return num;
};
var dfs=function(arr,i,j,m,n){
    if(i<0||i>=m||j<0||j>=n){
        return;
    }
    if(arr[i][j]==0){
        return;
    }
    arr[i][j]=0;
    dfs(arr,i+1,j,m,n);
    dfs(arr,i-1,j,m,n);
    dfs(arr,i,j+1,m,n);
    dfs(arr,i,j-1,m,n);
}