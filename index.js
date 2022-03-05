const inquirer = require('inquirer');

console.log("Please build your team")
const questions = () =>
    inquirer.prompt([
        {
            type: 'input',
            message: `What is the team manager's name?`,
            name: `manager name`,
        },
        {
            type: 'input',
            message: `What is the team manager's id?`,
            name: 'manager id',
        }, 
        {
            type: 'input',
            message: `What is the team manager's email`,
            name: 'manager email',
        }, 
        {
            type: 'input',
            message: `What is the team manager's office number`,
            name: 'manager office',
        }, 
        {
            type: 'list',
            message: 'Choose a license for your project.',
            choices: ['MIT', 'BSD-2-Clause', 'GNUAGPLv3', 'LGPL-3.0', 'GNULGPLv3',  'Apache-2.0', 'BSD-3-Clause','Mozilla-v2.0'],
            name: 'license'
        },
    ]);

    questions();