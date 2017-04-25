var size = Symbol( 'size' );
class Collection {
    constructor() {
        this[ size ] = 0;
    }

    add( item ) {
        this[ this[ size ] ] = item; //赋值操作
        this[ size ]++;
    }

    static sizeof( instance ) { //instance[size] 说明instance是一个对象
        return instance[ size ]; //通过英文 instance  实例
    }
}
var x = new Collection(); //实例化对象
x.add( 'foo' ); //为实例增加属性
console.log( Collection.sizeof( x ) ); //这个不是对象的方法，是类的方法 static定义 静态方法
console.log( Object.keys( x ) ); //['0']
console.log( Object.getOwnPropertyNames( x ) ); //['0']
console.log( Object.getOwnPropertySymbols( x ) ); //[Symbol(size)];
//利用Symbol常规方法不可遍历的特性，为对象定义一些非私有，但又希望只用于内部的数据
