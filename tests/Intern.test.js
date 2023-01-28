const Intern = require("../lib/intern")

describe('Intern', () => {
    describe('', () => {
        it('If the Intern is an Intern Object', () => {
            const employee = new Intern();
            expect(employee instanceof Intern).toEqual(true)
        })
        it('Should return properties associated with the object', () => {
            const employee = new Intern();
            expect('name' in employee).toEqual(true);
            expect('id' in employee).toEqual(true);
            expect('email' in employee).toEqual(true);
            expect('school' in employee).toEqual(true);
        })
        it('Should return the methods associated with the object', () => {
            const employee = new Intern();
            expect('getName' in employee).toEqual(true);
            expect('getId' in employee).toEqual(true);
            expect('getEmail' in employee).toEqual(true);
            expect('getSchool' in employee).toEqual(true);
            expect('getRole' in employee).toEqual(true);
        })
    })
    describe('getName', () => {
        it('', () => {
            const employee = new Intern('test', 11, 'drago@got.com');
            expect(employee.getName()).toEqual("test")
        })
    })
    describe('getId', () => {
        it('', () => {
            const employee = new Intern('test', 11, 'drago@got.com');
            expect(employee.getId()).toEqual(11)
        })
    })
    describe('getEmail', () => {
        it('', () => {
            const employee = new Intern('test', 11, 'drago@got.com');
            expect(employee.getEmail()).toEqual('drago@got.com')
        })
    })
    describe('getRole', () => {
        it('', () => {
            const employee = new Intern('test', 11, 'drago@got.com');
            expect(employee.getRole()).toEqual('Intern')
        })
    })
})