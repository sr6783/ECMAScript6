//Symbol值具有唯一性
//参数不指向值，而是指向描述
var mySymbol = Symbol( 's1' );
var o = {};
o[ mySymbol ] = 'Hello';
console.log( o[ mySymbol ] ); //hello
console.log( o.mySymbol ); //undefined

//为什么会出现undefined?
//因为点运算符实际上对应的键是字符串，而Symbol并不属于字符串类型，Symbol类型只能通过[]访问
//增强对象写法定义一个对象的方法
let s = Symbol();
var obj = {
  [ s ]( arg ) {
        return arg
    }
}
console.log( obj[ s ]( 123 ) );
