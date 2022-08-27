var arr=[1,2,3,{y:10}];
var newArr=arr.slice();
newArr[3].x=20;
newArr[3].y=30;
newArr[1]=20;
console.log(arr);
console.log(newArr);

var deepClone=function(obj){
  if(typeof obj!=='object'){
    return obj;
  }
  var res=Object.prototype.toString.call(obj).slice(8,-1)=='object'?{}:[];
  for(let i in obj){
    if(typeof obj[i]=='object'){
      res[i]=deepClone(obj[i]);
    }else{
      res[i]=obj[i];
    }
  }
  return res;
}
var arr1=[1,2,3,{y:10}];
var newArr1=deepClone(arr1);
newArr1[3].x=20;
newArr1[3].y=30;
newArr1[1]=20;
console.log(arr1);
console.log(newArr1);