var isValid=function(s){
    var len=s.length;
    if(len%2!==0)return false;
    var map=new Map([
        [')','(',],
        [']','['],
        ['}','{']
    ])
    var stack=[];
    for(let i=0;i<len;i++){
        if(map.has(s.charAt(i))){
            if(stack.pop()!==map.get(s.charAt(i)))
            return false;
        }else{
            stack.push(s.charAt(i));
        }
    }
    if(stack.length)return false;
    return true;
}