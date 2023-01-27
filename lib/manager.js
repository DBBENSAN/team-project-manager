const Employee = require("./employee")

class Employee extends Manager {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber
  }

  getRole() {
    return 'Manager'
  }

  getOffice() {
    return this.officeNumber
  }
}

module.exports = Manager;