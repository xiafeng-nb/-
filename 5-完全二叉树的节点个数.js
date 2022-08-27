var countNodes = function(root) {
    var num=0;
    var dfs=function(root){
        if(!root)return;
        num++;
        dfs(root.left);
        dfs(root.right);
    }
    dfs(root);
    return num;
};