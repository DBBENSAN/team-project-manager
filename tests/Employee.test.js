
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
        it('', () => {
            const employee = new Employee();
            expect('getName' in employee).toEqual(true);
            expect('getId' in employee).toEqual(true);
            expect('getEmail' in employee).toEqual(true);
            expect('getGithub' in employee).toEqual(true);
            expect('getRole' in employee).toEqual(true);
        })
    })
    describe('getName', () => {
        it('', () => {
            const employee = new Employee();
        })
    })
    describe('getName', () => {
        it('', () => {
            const employee = new Employee();
        })
    })
    describe('getName', () => {
        it('', () => {
            const employee = new Employee();
        })
    })
})