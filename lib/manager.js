const Employee = require("./employee")

class Employee extends Manager{
    constructor(officeNumber) {
      super();
      this.officeNumber = officeNumber
    }
  
    getRole(){
        role = 'Manager'
       }
  }