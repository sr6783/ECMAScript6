'use strict';
export default class Employee {
    constructor( id, name, dob ) {
        this.id = id;
        this.name = name;
        this.dob = dob;
    }
    getAge() {
        return ( new Date() ).getYear() - this.dob.getYear();
    }
}
export function getEmployee( id, name, dob ) {
    return new Employee( id, name, dob );
}
var emp = new Employee( 1, "Rina", new Date( 1987, 1, 22 ) );
