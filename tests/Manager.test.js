const Manager = require("../lib/manager")

describe('Manager', () => {
    describe('', () => {
        it('If the Manager is an Manager Object', () => {
            const employee = new Manager();
            expect(employee instanceof Manager).toEqual(true)
        })
        it('Should return properties associated with the object', () => {
            const employee = new Manager();
            expect('name' in employee).toEqual(true);
            expect('id' in employee).toEqual(true);
            expect('email' in employee).toEqual(true);
            expect('officeNumber' in employee).toEqual(true);
        })
        it('Should return properties associated with the object', () => {
            const employee = new Manager();
            expect('getName' in employee).toEqual(true);
            expect('getId' in employee).toEqual(true);
            expect('getEmail' in employee).toEqual(true);
            expect('getOffice' in employee).toEqual(true);
            expect('getRole' in employee).toEqual(true);
        })
    })
    describe('getName', () => {
        it('', () => {
            const employee = new Manager('test', 11, 'drago@got.com');
            expect(employee.getName()).toEqual("test")
        })
    })
    describe('getId', () => {
        it('', () => {
            const employee = new Manager('test', 11, 'drago@got.com');
            expect(employee.getId()).toEqual(11)
        })
    })
    describe('getEmail', () => {
        it('', () => {
            const employee = new Manager('test', 11, 'drago@got.com');
            expect(employee.getEmail()).toEqual('drago@got.com')
        })
    })
    describe('getRole', () => {
        it('', () => {
            const employee = new Manager('test', 11, 'drago@got.com');
            expect(employee.getRole()).toEqual('Manager')
        })
    })
})