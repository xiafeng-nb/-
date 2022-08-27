function Sort(arr){
    quickSort(arr,0,arr.length-1);
    return arr;
}
function quickSort(arr,left,right){
    var i=left,j=right,priovt=arr[left];
    var tmp=0;
    if(i>=j)return;
    while(i<j){
        while(i<j&&priovt<arr[j]){
            j--;
        }
        tmp=arr[j];
        arr[j]=arr[i];
        arr[i]=tmp;
        while(i<j&&priovt>=arr[i]){
            i++;
        }
    }
    quickSort(arr,left,i-1);
    quickSort(arr,i+1,right);
}
var arr=[1,4,2,6,1];
console.log(Sort(arr));