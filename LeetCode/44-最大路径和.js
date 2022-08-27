var maxPathSum = function(root) {
    var max=-Infinity;
    var dfs=function(root){
        if(!root)return 0;
        var left=dfs(root.left);
        var right=dfs(root.right);
        var inner=left+right+root.val;
        max=Math.max(inner,max);
        var outner=Math.max(0,left,right)+root.val;
        return Math.max(0,outner);
    }
    dfs(root);
    return max;
};