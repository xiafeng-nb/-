var invertTree = function(root) {
    dfs(root);
    return root;

};
var dfs=function(root){
    if(!root){
        return;
    }
    var node=root.left;
    root.left=root.right;
    root.right=node;
    dfs(root.left);
    dfs(root.right);
}