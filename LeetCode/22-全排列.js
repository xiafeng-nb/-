var allsort=function(nums){
    var res=[];
    var used={};
    var dfs=function(path){
        if(path.length==nums.length){
            res.push(path.slice());
            return;
        }
        for(let i=0;i<nums.length;i++){
            if(used[nums[i]])continue;
            path.push(nums[i]);
            used[nums[i]]=true;
            dfs(path);
            path.pop();
            used[nums[i]]=false;
        }
    }
    dfs([]);
    return res;
}

var arr=[1,2,3];
console.log(allsort(arr));