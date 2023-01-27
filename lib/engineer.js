const Employee = require("./employee")

class Employee extends Engineer {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github
  }
  
  getRole() {
    return 'Engineer'
  }

  getGithub() {
    return this.github
  }
}

module.exports = Engineer;