function inOrder(root){
    if(!root)return[];
    var res=[];
    var dfs=function(root){
        if(!root)return;
        res.push(root.val);
        dfs(root.left);
        dfs(root.right);
    }
    dfs(root);
    return res;
}

function inOrdernodigui(root){
    if(!root)return [];
    var res=[];
    var stack=[root];
    while(stack.length){
        var node=stack.pop();
        res.push(node.val);
        node.right&&stack.push(node.right);
        node.left&&stack.push(node.left);
    }
    return res;
}