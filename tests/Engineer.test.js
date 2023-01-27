const Engineer = require("../lib/engineer")

describe('Engineer', () => {
    describe('', () => {
        it('If the Engineer is an Engineer object', () => {
            const employee = new Engineer();
            expect(employee instanceof Engineer).toEqual(true)
        })
        it('Should return properties associated with the object', () => {
            const employee = new Engineer();
            expect('name' in employee).toEqual(true);
            expect('id' in employee).toEqual(true);
            expect('email' in employee).toEqual(true);
            expect('officeNumber' in employee).toEqual(true);
        })
        it('Should return the methods associated with the object', () => {
            const employee = new Engineer();
            expect('getName' in employee).toEqual(true);
            expect('getId' in employee).toEqual(true);
            expect('getEmail' in employee).toEqual(true);
            expect('getGithub' in employee).toEqual(true);
            expect('getRole' in employee).toEqual(true);
        })
    })
    describe('getName', () => {
        it('', () => {
            const employee = new Engineer('test', 11, 'drago@got.com', '');
            expect(employee.getName()).toEqual("test")
        })
    })
    describe('getID', () => {
        it('', () => {
            const employee = new Engineer('test', 11, 'drago@got.com', '');
            expect(employee.getID()).toEqual(11)
        })
    })
    describe('getEmail', () => {
        it('', () => {
            const employee = new Engineer('test', 11, 'drago@got.com', '');
            expect(employee.getEmail()).toEqual('drago@got.com')
        })
    })
    describe('getRole', () => {
        it('', () => {
            const employee = new Engineer('test', 11, 'drago@got.com');
            expect(employee.getRole()).toEqual('Engineer')
        })
    })
})