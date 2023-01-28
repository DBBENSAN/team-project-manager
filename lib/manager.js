const Employee = require("./employee")

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber
  }
  getId() {
    return this.id
  }

  getRole() {
    return 'Manager'
  }

  getOffice() {
    return this.officeNumber
  }
}

module.exports = Manager;