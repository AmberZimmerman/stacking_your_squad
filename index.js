const inquirer = require("inquirer");

const managerPrompts = require("./src/prompts/manager");
const commonPrompts = require("./src/prompts/common");
const engineerPrompts = require("./src/prompts/engineer");
const internPrompts = require("./src/prompts/intern");
const { addNewPrompt } = require("./src/prompts/single");

console.log("Please build your team");
const start = () => {
  const prompts = [...commonPrompts, ...managerPrompts, addNewPrompt];
return inquirer.prompt(prompts);
};

const nextStep = (newPrompts) => {
  return inquirer.prompt(newPrompts);
};

const getAdditionalPrompts = (addNew) => {
  switch (addNew) {
    case "intern":
      return internPrompts;
    case "engineer":
      return engineerPrompts;
    case "manager":
      return managerPrompts;
  }
};

// getAdditionalPrompts();

const generateHtml = (data) => {
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
  if (data.addNew === "no more employees") {
    return;
  }
let addMoreEmployees = data.addNew;
  while (addMoreEmployees != "no more employees") {
      addMoreEmployees = "no more employees";
  }
  const newPrompts = getAdditionalPrompts(data.addNew);
  console.log("new variable");
  console.log(newPrompts);
//   nextStep([...commonPrompts, ...newPrompts, addNewPrompt]);
  generateHtml(data);
  const finishedHtml = generateHtml(data);
  console.log(finishedHtml)
});
