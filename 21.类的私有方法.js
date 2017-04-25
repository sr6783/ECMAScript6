class Widget {
    foo( baz ) {
        bar.call( this, baz );
    }
}
//因为类是会被暴露出去的，所以类中的所有方法，都是透明的，外部都可以调用到，基于这个原因，我们把私有方法移出类
function bar( baz ) {
    return this.snaf = baz;
}
//把私有方法移出类，这样完成了私有方法的目的也封装了私有方法
//目的:内部实现
