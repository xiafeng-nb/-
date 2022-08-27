var kthSmallest = function(root, k) {
    var count=0;
    var res=0;
    var dfs=function(root){
        if(!root)return;
        dfs(root.left)
        count++;
        if(count==k){
            res=root.val;
        }
        dfs(root.right);
    }
    dfs(root);
    return res;
}