function Animal(){
    this.colors=['blue','red'];
}
Animal.prototype.getColors=function(){
    console.log(this.colors);
}
function Dog(){

}
Dog.prototype=new Animal();
var dog1=new Dog();
var dog2=new Dog();
dog1.colors.push('pink');
dog1.getColors();
dog2.getColors();
// 原型继承的问题：1.原型上的引用类型多个实例共享，一个改变其他全变
// 2.子对象实例化无法传参