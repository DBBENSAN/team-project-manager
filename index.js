const resultsPage = require('./src/generateFile');


const inquirer = require('inquirer');

const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

// function writeToFile(fileName, data) {}


const team = [];

const teamQuest = [
    {
        name: 'name',
        message: "What is this Employee's name?"
    },
    {
        name: 'id',
        message: "What is this Employee's ID number?"
    },
    {
        name: 'email',
        message: "What is this Employee's email address?"
    },
    {
        type: 'list',
        name: 'role',
        message: "What is this Employee's role?",
        choices: ["Manager", "Engineer", "Intern"]
    }
]

const officeNumberQuest = [
    {
        message: "What is their office number?",
        name: "officeNumber"
    }
]

const schoolQuest = [
    {
        message: "What school do they attend?",
        name: "school"
    }
]

const githubQuest = [
    {
        message: "What is their GitHub account name?",
        name: "github"
    }
]

function init() {
    console.log(`SHALL WE`)
    inquirer.prompt(teamQuest).then((data) => {
        roleQuest(data)
    })
}

function roleQuest(data) {
    // const name = data.name
    // const id = data.id
    // const email = data.email
    // const role = data.role
    let { name, id, email, role } = data
    let employee;
    console.log(data)

    if (role === 'Manager') {
        inquirer.prompt(officeNumberQuest)
            .then((answer) => {
                let { officeNumber } = answer
                employee = new Manager (name, id, email, officeNumber);
                console.log(employee)

            })
    }
    if (role === 'Engineer') {
        inquirer.prompt(githubQuest)
            .then((answer) => {
                let { github } = answer
                employee = new Engineer (name, id, email, github);
                console.log(employee)
            })
    }
    if (role === 'Intern') {
        inquirer.prompt(schoolQuest)
            .then((answer) => {
                let { school } = answer
                employee = new Intern (name, id, email, school);
                console.log(employee)
            })
    }
}

const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("NICE")
        }
    })
}

init();