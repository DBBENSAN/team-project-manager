class Employee {
    constructor(name, id, email, role) {
        this.name = name;
        this.email = email
        this.id = id;
        this.role = role;
    };
    getName() {
       return this.name
    };
    getEmail() {
        return this.email
    };
    getId() {
        return this.id
    };
    getRole() {
        return 'Employee'
    };
}

module.exports = Employee;
