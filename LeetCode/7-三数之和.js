var threeSum = function(nums) {
    if(nums==null||nums.length<3)return[];
    nums.sort((a,b)=>a-b);
    var res=[];
    for(let i=0;i<nums.length;i++){
        if(nums[i]>0){
            break;
        }
        if(i>0&&nums[i]==nums[i-1]){
            continue;
        }
        var left=i+1;
        var right=nums.length-1;
        while(left<right){
            if(nums[i]+nums[left]+nums[right]==0){
                res.push([nums[i],nums[left],nums[right]]); 
            while(left<right&&nums[left]==nums[left+1]){
                left++;
            }
            while(left<right&&nums[right]==nums[right-1]){
                right--;
            }
            left++;
            right--;
        }else if(nums[i]+nums[left]+nums[right]<0){
            left++;
        }else{
            right--;
        }
        }
    }
    return res;
};