'use strict';
//SyntaxError: Unexpected token import
//import './17.Employee'; //导入模块 导入模块的语法错误，导入模块变量名 + 来源
//import './17-Employee.js';//只导入模块没引入功能
/*
import Employee from './17-Employee';
var e1 = new Employee( '001', 'jack', 'cooker' );
console.log( e1.getMessage() );
*/
//onsole.log( e1.id );
//console.log( e1 );


import customName from './export-default';
customName(); // 'foo'
