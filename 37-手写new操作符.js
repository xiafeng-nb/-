function objectFactory(){
    // 首先创建了一个空对象
    let newObject=null;
    let constructor=Array.prototype.shift.call(arguments);
    let result=null;
    if(typeof constructor!=="function"){
        return;
    }
    // 把对象的原型设为构造函数的prototype对象
    newObject=Object.create(constructor.prototype);
    // 把this指向新建对象，并执行构造函数的代码
    result = constructor.apply(newObject,arguments);
    return result&&(typeof result==="object"||typeof result==="function")?result:newObject;
}
var a=objectFactory(Object)
console.log(a);