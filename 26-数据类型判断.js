function typeOf(obj){
    let res=Object.prototype.toString.call(obj).slice(8,-1);
    return res;
}
var a=1;
console.log(typeOf(a));