const inquirer = require("inquirer");

console.log("Please build your team");
const questions = () =>
  inquirer.prompt([
    {
      type: "input",
      message: `What is the team manager's name?`,
      name: `managerName`,
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
    {
      type: "input",
      message: `What is the team manager's office number?`,
      name: "managerOffice",
    },
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
  ]);

const generateHtml = ({
  managerName,
  managerId,
  managerEmail,
  managerOffice,
}) => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Stack your Squad</title>
   
</head>

<body>
<h1>Hello World</h1>

</body>
`;
};

questions().then((data) => {
  console.log(data);
});
