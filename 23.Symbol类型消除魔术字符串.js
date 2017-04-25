//魔术字符串：在代码中多次出现和代码形成强耦合的具体的字符串或数字，风格良好的代码，应该尽量消除魔术字符串，改用含义清晰的变量代替。
/*
function getArea( shape, option ) {
    var area = 0;
    switch ( shape ) {
    case 'Triangle':
        area = .5 * option.width * option.height;
        break;
        //很长的代码

}
return area;
}
console.log( getArea( 'Triangle', {
    width: 100,
    height: 100
} ) );
*/


//魔术字符串存在的问题：不利于修改和维护
/* *****************修改*********************** */
const shapeType = {
    triangle: 'Triangle'
}

function getArea( shape, option ) {
    var area = 0;
    switch ( shape ) {
    case shapeType.triangle:
        area = .5 * option.width * option.height;
        break;
        /* Long Long code*/

    }
    return area;
}
console.log( getArea( shapeType.triangle, {
    width: 100,
    height: 100
} ) );
