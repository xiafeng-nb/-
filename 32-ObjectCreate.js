var Animal=function(){

}
var Dog=Object.create(Animal.prototype);
console.log(Dog.__proto__===Animal.prototype);
var a=-"";
console.log(typeof a); 
