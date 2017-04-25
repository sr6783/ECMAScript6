//遍历属性名
var o = {};
var s1 = Symbol( 's1' );
var s2 = Symbol( 's2' );
o = {
  [ s1 ]: '我的键是Symbol类型，通常的遍历找不到我',
  [ s2 ]: '我的键是Symbol类型，找不到我不表示我是不可枚举',
    s3: '我是字符串类型的键，我可以被遍历'
}
var arr = [];
for ( var key in o ) {
    arr.push( key );
}
console.log( arr ); //['s3']
