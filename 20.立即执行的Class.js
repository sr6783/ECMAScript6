const person = new class {
    constructor( name ) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}( '张三' );
console.log( person ); //{name:'张三'}
