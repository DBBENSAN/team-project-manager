const inquirer = require('inquirer')

// function writeToFile(fileName, data) {}
function init() {
    inquirer
        .prompt[
        {
            type: 'confirm',
            name: 'start',
            message: 'Would you like to begin building a team?'
        }
    ]
}

init()