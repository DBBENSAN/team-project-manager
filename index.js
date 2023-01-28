// const generateFile = require('./src/generateFile');
// const makeCards = require('./src/generateFile');
const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");


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
    console.log(`Begin making a team:`)
    inquirer.prompt(teamQuest).then((data) => {
        roleQuest(data)
    })
}

const teamArray = [];
function roleQuest(data) {
    let { name, id, email, role } = data
    let employee;
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
                addMember(employee);
            })
    }
    if (role === 'Intern') {
        inquirer.prompt(schoolQuest)
            .then((answer) => {
                let { school } = answer
                employee = new Intern(name, id, email, school);
                addMember(employee);
            })
    }
}

function addMember(employee) {
    teamArray.push(employee);

    inquirer.prompt(addAnother).then((answer) => {
        let temp = answer.another
        if (temp === false) {

            writeToFile(generateCards(teamArray));
        } else {
            init();
        }
    })
}

const generateCards = (array) => {
    const cardArray = [];
    for (let i = 0; i < array.length; i++) {
        const card = `
      <div class="col">
      <h2>${array[i].name}</h2>
      <div>
          <p>${array[i].id}</p>
          <p>${array[i].email}</p>
          <p>${array[i].role}</p>
      </div>
      </div>
      `
        cardArray.push(card)
  

    };
    return cardArray.join(' ')
}


function writeToFile(generateCards) {

    fs.appendFile('./dist/index.html', `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="./assets/style.css">
    <title>Team Project Manager</title>
</head>
<body>
    <!-- this is where the header goes -->
    <header class="jumbotron">
    <h1>Introducing the team!</h1>
    </header>

    <!-- this is where the cards will append to  -->
    <main class="container row align-items-start">
    ${generateCards}
    </main>

    <!-- add a footer for fun -->
    <footer>

    </footer>
    
</body>
</html>
    `
    , err => {
        err ? console.log(err) : console.log(`
⣿⣷⡶⠚⠉⢀⣤⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⠠⣴⣿⣿⣿⣿⣶⣤⣤⣤
⠿⠥⢶⡏⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⢀⣴⣷⣌⢿⣿⣿⣿⣿⣿⣿⣿
⣍⡛⢷⣠⣿⣿⣿⣿⣿⣟⠻⣯⠽⣿⣿⠟⠁⣠⠿⠿⣿⣿⣎⠻⣿⣿⣿⡿⠟⣿
⣿⣿⣦⠙⣿⣿⣿⣿⣿⣿⣷⣏⡧⠙⠁⣀⢾⣧    ⠈⣿⡟  ⠙⣫⣵⣶⠇⣋
⣿⣿⣿⢀⣿⣿⣿⣿⣿⣿⣿⠟⠃⢀⣀⢻⣎⢻⣷⣤⣴⠟  ⣠⣾⣿⢟⣵⡆⢿
⣿⣯⣄⢘⢻⣿⣿⣿⣿⡟⠁⢀⣤⡙⢿⣴⣿⣷⡉⠉⢀  ⣴⣿⡿⣡⣿⣿⡿⢆
⠿⣿⣧⣤⡘⢿⣿⣿⠏  ⡔⠉⠉⢻⣦⠻⣿⣿⣶⣾⡟⣼⣿⣿⣱⣿⡿⢫⣾⣿
⣷⣮⣝⣛⣃⡉⣿⡏  ⣾⣧⡀    ⣿⡇⢘⣿⠋    ⠻⣿⣿⣿⢟⣵⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣌⢧⣴⣘⢿⣿⣶⣾⡿⠁⢠⠿⠁⠜    ⣿⣿⣿⣿⡿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣦⡙⣿⣷⣉⡛⠋    ⣰⣾⣦⣤⣤⣤⣿⢿⠟⢋⣴⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣌⢿⣿⣿⣿⣿⢰⡿⣻⣿⣿⣿⣿⣿⢃⣰⣫⣾⣿⣿⣿
⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡆⠿⠿⠿⠛⢰⣾⡿⢟⣭⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿

                 SUCCESS 
        `)
    })
}

init();