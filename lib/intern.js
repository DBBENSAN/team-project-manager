const Employee = require("./employee")

class Employee extends Intern {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school
  }

  getRole() {
    return 'Intern'
  }

  getOffice() {
    return this.school
  }
}

module.exports = Intern;