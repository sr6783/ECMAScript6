//类的表达式形式
const MyClass = class Me {
    getClassName() {
        return Me.name;
    }
}
//需要注意的是:这个类的类名是MyClass而不是Me，Me只能在class的内部使用，指向当前类。
//如何用
let inst = new MyClass();
console.log( inst.getClassName() ); //Me
Me.name; //Me is not defined
