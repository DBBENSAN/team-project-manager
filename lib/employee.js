const inquirer = require("inquirer")

class Employee {
    constructor() {
        this.name = name;
        this.email = email
        this.id = id;
        this.role = role;
    };
    getName() {
        inquirer
            .prompt([
                {
                    name: 'name',
                    message: "What is this Employee's name?"
                }
            ])
            .then((response) => {
                this.getEmail()
                return response.name
            })
    };
    getEmail() {
        inquirer
            .prompt[
            {
                name: 'email',
                message: "What is this Employee's email address?"
            }]
            .then((response) => {
                this.getID
                return response.id
            })
    };
    getID() {
        inquirer
            .prompt[
            {
                name: 'email',
                message: "What is this Employee's ID #?"
            }]
            .then((response) => {
                this.getRole
                return response.email
            })
    };
    getRole() {
        inquirer
            .prompt[
            {
                type: "list",
                name: 'role',
                message: "What is this Employee's role?",
                choices: ['engineer', 'intern', 'manager'],
            }]
            .then((response) => {
                    return response.role
            })
    };

}
