const resultsPage = require('./src/generateFile');


const inquirer = require('inquirer');

const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

// function writeToFile(fileName, data) {}




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
    const name = data.name
    const id = data.id
    const email = data.email
    const role = data.role
    console.log(role)

    if (role === 'Manager') {
        inquirer.prompt(officeNumberQuest)
            .then((officeNumber) => {
                this.employee = new Manager (name, id, email, officeNumber, title)
            })
    }
    if (role === 'Engineer') {
        inquirer.prompt(githubQuest)
            .then((data, github) => {

            })
    }
    if (role === 'Intern') {
        inquirer.prompt(schoolQuest)
            .then((data, school) => {
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