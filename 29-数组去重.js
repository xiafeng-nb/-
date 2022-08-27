var uniqueArr=function(arr){
    var hashmap={};
    var res=[...new Set(arr)];
    res=res.reduce((pre,cur)=>{
        if(!hashmap[JSON.stringify(cur)]){
            hashmap[JSON.stringify(cur)]=true;
            pre.push(cur);
        }
        return pre;
    },[]);
    return res;
}
var arr=[1,3,1,2,4,{name:'xf'},{name:'xf'},{name:'zz'},'xf','fx','xf'];
console.log(uniqueArr(arr));