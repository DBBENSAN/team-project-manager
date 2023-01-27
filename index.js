// const generateFile = require('./src/generateFile');
// const makeCards = require('./src/generateFile');
const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");




const teamArray = [];
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
const addAnother = [
    {
        type: 'confirm',
        message: 'Add another team member?',
        name: 'another',
        default: false
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
                employee = new Manager(name, id, email, officeNumber);
                addMember(employee);
            })
    }
    if (role === 'Engineer') {
        inquirer.prompt(githubQuest)
            .then((answer) => {
                let { github } = answer
                employee = new Engineer(name, id, email, github);
                console.log(employee)
                addMember(employee);
            })
    }
    if (role === 'Intern') {
        inquirer.prompt(schoolQuest)
            .then((answer) => {
                let { school } = answer
                employee = new Intern(name, id, email, school);
                console.log(employee)
                addMember(employee);
            })
    }
}

function addMember(employee) {
    teamArray.push(employee);
    // console.log(teamArray)
    inquirer.prompt(addAnother).then((answer) => {
        let temp = answer.another
        // console.log(answer)
        if (temp === false) {
            
            writeToFile(generateFile(generateCards(teamArray)))
        } else {
            init();
        }
    })
}

function generateCards(Array) {
    const cardArray = [];
    for (let i = 0; i < Array.length ; i++) {
        let curr = Array[i]
        const card = `
      <div>
      <h2>${curr.name}</h2>
      <div>
          <p>${curr.id}</p>
          <p>${curr.email}</p>
          <p>${curr.role}</p>
      </div>
      </div>
      `
        cardArray.push(card)
        // console.log('thisis the card', card);

    };
    console.log('Joined Array', cardArray.join(" "));
    return cardArray.join(' ')
}

function generateFile() {
    return `
      <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Project Manager</title>
  </head>
  <body>
      <!-- this is where the header goes -->
      <header>
  
      </header>
  
      <!-- this is where the cards will append to  -->
      <main>
      ${generateCards(Array)}
      </main>
  
      <!-- add a footer for fun -->
      <footer>
  
      </footer>
      
  </body>
  </html>
      `;
}

function writeToFile() {
    fs.appendFile('index.html', data, err => {
        err ? console.log(err) : console.log("Success!")
    })
}

init();