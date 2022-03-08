const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeToFile = util.promisify(fs.writeFile);

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

const finishedCards = generateEmployeeCards(data);


  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Stack your Squad</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
   
</head>

<body>

${finishedCards}

</body>
`;
};

const generateEmployeeCards = (employees) => {
  let employeeCards = "";
  for (let index = 0; index < employees.length; index++) {
    const employee = employees[index];
    const newCard = 
    `<div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${employee.memberName}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>lalal
    <ul class="list-group list-group-flush">
    <li class="list-group-item">${employee.addNew}</li>
      <li class="list-group-item">${employee.memberId}</li>
      <li class="list-group-item"><a href="mailto:${employee.memberEmail}" class="card-link">${employee.memberEmail}</a></li>
      <li class="list-group-item"><a href="https://github.com/${employee.engineerGithub}" class="card-link">${employee.engineerGithub}</a></li>
      <li class="list-group-item">${employee.managerOffice}</li>
    </ul>
  </div>`;
  employeeCards += newCard;
  }
  return employeeCards;
};


start().then(async(data) => {
  console.log(data);
  const employeeData = [data];

  if (data.addNew === "no more employees") {
    return;
  }
  let addMoreEmployees = data.addNew;
  let additionalPrompts = getAdditionalPrompts(data.addNew);


  while (addMoreEmployees != "no more employees") {
    const allDone = await nextStep([...commonPrompts, ...additionalPrompts, addNewPrompt]);
    additionalPrompts = getAdditionalPrompts(allDone.addNew);
    console.log(allDone);
    addMoreEmployees = allDone.addNew;
    employeeData.push(allDone)
  }
  console.log("new variable");
  const finishedHtml = generateHtml(employeeData);
  console.log(finishedHtml);
  writeToFile("index.html", finishedHtml);
});
