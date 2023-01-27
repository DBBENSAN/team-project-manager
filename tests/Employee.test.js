
const Employee = require("../lib/employee");

describe('Employee', () => {
    describe('', () => {
        it('If the Employee is an Employee object', () => {
            const employee = new Employee();
            expect(employee instanceof Employee).toEqual(true)
        })
        it('Should return properties associated with the object', () => {
            const employee = new Employee();
            expect('name' in employee).toEqual(true);
            expect('id' in employee).toEqual(true);
            expect('email' in employee).toEqual(true);
            expect('officeNumber' in employee).toEqual(true);
        })
        it('Should return the methods associated with the object', () => {
            const employee = new Employee();
            expect('getName' in employee).toEqual(true);
            expect('getId' in employee).toEqual(true);
            expect('getEmail' in employee).toEqual(true);
            expect('getRole' in employee).toEqual(true);
        })
    })
    describe('getName', () => {
        it('Should return Employee name', () => {
            const employee = new Employee('test', 11, 'drago@got.com');
            expect(employee.getName()).toEqual("test")
        })
    })
    describe('getID', () => {
        it('Should return Employee ID', () => {
            const employee = new Employee('test', 11, 'drago@got.com');
            expect(employee.getID()).toEqual(11)
        })
    })
    describe('getEmail', () => {
        it('Should return Employee email', () => {
            const employee = new Employee('test', 11, 'drago@got.com');
            expect(employee.getEmail()).toEqual('drago@got.com')
        })
    })
    describe('getRole', () => {
        it('Should return "Employee"', () => {
            const employee = new Employee('test', 11, 'drago@got.com');
            expect(employee.getRole()).toEqual('Employee')
        })
    })
})