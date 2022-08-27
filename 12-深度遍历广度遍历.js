var arr=[]
function bfs(root){
    if(!root)return;
    var stack=[root];
    while(stack.length){
        var len=stack.length;
        while(len--){
            var node=stack.shift();
            arr.push(node);
            for(let i=0;i<node.children.length;i++){
                stack.push(node.children[i]);
            }
        }
    }

}
var arr=[]
function dfs(root){
    if(!root)return;
    if(root.children.length==0){
        arr.push(root);
        return;
    }
    arr.push(root);
    for(let i=0;i<root.children.length;i++){
        dfs(root.children[i])
    }
}
var arr=[]
function inOrder(root){
    if(!root)return;
    arr.push(root.val);
    inOrder(root.left);
    inOrder(root.right);
}

function myInstanceof(left,right){
    var proto=Object.getPrototypeOf(left);
    var prototype=right.prototype;
    while(true){
        if(!proto)return false;
        if(proto===prototype)return true;
        proto=Object.getPrototypeOf(proto);
    }
}