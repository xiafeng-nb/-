var generateParenthesis = function(n) {
    if(n<=0){
        return [];
    }
    var res=[];
    var dfs=function(paths,left,right){
        if(left>n||right>left){
            return;
        }
        if(paths.length==n*2){
            res.push(paths);
            return;
        }
        dfs(paths+'(',left+1,right);
        dfs(paths+')',left,right+1);
    }
    dfs('',0,0);
    return res;
};
console.log(generateParenthesis(1));
console.log(generateParenthesis(3));