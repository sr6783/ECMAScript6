 'use strict';
 // 最简单的函数
 var foo = a => a;
 console.log( foo( 'hello world!' ) );
 foo = function ( a ) {
     return a;
 };
 console.log( foo( 'abc' ) );

 // 省略了关键字function
 // 单个参数省略了小括号
 // 函数条单挑语句省略了大括号

 //无参
 var foo2 = () => console.log( 'haha' );
 console.log( foo2() );


 //函数体多条语句
 var add = ( a, b ) => {
     if ( typeof a === 'number' && typeof b === 'number' ) {
         return a + b;
     } else {
         return 0;
     }
 };
 console.log( add( 1, 3 ) );

 //返回值是对象时
 var getHash = () => {
     return {
         name: 'zs',
         age: 10
     }
 };
 console.log( getHash().name );
 //说返回对象是需要用小括号包裹起来，因为大括号被占用解释代码块了，但实际上没包裹也没报错


 //事件
 document.addEventListener( 'click', event => {
     console.log( event );
 } );

 /*箭头函数的好处:
 1.*/
