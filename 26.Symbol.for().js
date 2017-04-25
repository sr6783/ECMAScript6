var s1 = Symbol( 's1' );
var s2 = s1;
console.log( s1 === s2 ); //true

var t1 = Symbol( 's1' );
console.log( s1 === t1 ); //false 我们知道即使2个Symbol调用，传相同的参数，Symbol值也不相同，因为这仅仅只是描述
// 如何相同?
var t2 = Symbol.for( 's1' );
console.log( t1 === t2 ); //false
var t3 = Symbol.for( 's1' );
console.log( t2 === t3 ); //true

//说明:Symbol.for()也是一种创建Symbol类型值的一种方式
//并且只要参数相同，2个Symbol值就是同一个值
