function clone(parent,child){
    child.prototype=Object.create(parent.prototype);
    child.prototype.constructor=child;
}
function Animal(){
    this.name='da';
    this.colors=['blue','yellow'];
}
Animal.prototype.getName=function(){
    console.log(this.name);
}
function Dog(){
    Animal.call(this);
    this.age=11;
}

clone(Animal,Dog);
var dog1=new Dog();
dog1.getName();
console.log(dog1.colors);