function threeSum(nums){
    var len=nums.length;
    var L=0,R=len-1;
    if(nums==null||len<3){
        return [];
    }
    nums.sort((a,b)=>a-b);
    var res=[];
    for(let i=0;i<len;i++){
        if(nums[i]>0){
            return res;
        }
        if(i>0&&nums[i]==nums[i-1]){
            continue;
        }
        L=i+1;
        R=len-1;
        while(L<R){
            var sum=nums[i]+nums[L]+nums[R];
            if(sum==0){
                res.push([nums[i],nums[L],nums[R]]);
                while(L<R&&nums[L]==nums[L+1]){
                    L++;
                }
                while(L<R&&nums[R]==nums[R-1]){
                    R--;
                }
                L++;
                R--;
            }else if(sum<0){
                L++;
            }else{
                R--;
            }
        }
    }
    return res;
}