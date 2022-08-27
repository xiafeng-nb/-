function Animal(name){
    this.name=name;
    this.getName=function(){
        console.log(this.name);
    }
}
function Dog(name){
    Animal.call(this,name);
}
// Dog.prototype=new Animal();
var dog1=new Dog('jy');
var dog2=new Dog('xd');
dog1.getName();
dog2.getName();