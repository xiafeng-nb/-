function Animal(name){
    this.name=name;
    this.colors=['white','black'];
}
Animal.prototype.getColors=function(){
    console.log(this.colors);
}
Animal.prototype.getName=function(){
    console.log(this.name);
}
function Dog(name,age){
    Animal.call(this,name);
    this.age=age;
}
Dog.prototype=new Animal();
Dog.prototype.constructor=Dog;
var dog1=new Dog('jm',15);
var dog2=new Dog('asd',2);
dog1.getColors();
dog1.getName()
dog1.colors.push('pink')
dog1.getColors()
dog2.getColors()