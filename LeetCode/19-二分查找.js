function twoSearch(arr,target){
    var left=0,right=arr.length-1;
    while(left<=right){
        var mid=left+Math.floor((right-left+1)/2);
        if(arr[mid]>target){
            right=mid;
        }else if(arr[mid]<target){
            left=mid;
        }else{
            return mid;
        }
    }
    return -1;
}