//类 Employee.js
'use strict';
const MyEmployee = class Employee {
    //构造函数 没有function关键字
    constructor( id, name, job ) {
        this.id = id;
        this.name = name;
        this.job = job;
    }
    //注意，上面没有分号
    //对外的方法
    getMessage() {
        return this.id + '=>'
        this.name + '=>'
        this.job;
    }

}

//export 导出类
//export default Employee;
export default MyEmployee;



//写法
