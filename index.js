const inquirer = require("inquirer");

const managerPrompts = require("./src/prompts/manager");
const commonPrompts = require("./src/prompts/common");
const engineerPrompts = require("./src/prompts/engineer");
const internPrompts = require("./src/prompts/intern");
const { additionalRole } = require("./src/prompts/single");



console.log("Please build your team");
const start = () => {
  const prompts = [...commonPrompts, ...managerPrompts, additionalRole]

  console.log(`xxxxxx`);
  console.log(prompts);

  return inquirer.prompt(prompts);
};

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

start().then((data) => {
  console.log(data);
});
