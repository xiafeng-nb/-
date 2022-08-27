function getMaxNum(arr){
    var max=arr[0];
    for(let i=1;i<arr.length;i++){
        arr[i]=Math.max(arr[i-1]+arr[i],arr[i]);
        max=Math.max(max,arr[i]);
    }
    return max;
}