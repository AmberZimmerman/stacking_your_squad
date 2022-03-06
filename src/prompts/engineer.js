module.exports = [
    {
        type: 'list',
        message: 'Choose an employee type.',
        choices: ['Engineer', 'Intern', 'No more team memebers'],
        name: 'license'
    },
    {
        type: "input",
        message: `What is the team member's name?`,
        name: "engineerName",
      },
     {
        type: "input",
        message: `What is the team member's name?`,
        name: "engineerName",
    },
    {
        type: "input",
        message: `What is the team manager's id?`,
        name: "managerId",
    },
    {
        type: "input",
        message: `What is the team manager's email?`,
        name: "managerEmail",
    },
]