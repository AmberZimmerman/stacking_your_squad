// linking external packages
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeToFile = util.promisify(fs.writeFile);

// exporting the prompts by using module.exports
const managerPrompts = require("./src/prompts/manager");
const commonPrompts = require("./src/prompts/common");
const engineerPrompts = require("./src/prompts/engineer");
const internPrompts = require("./src/prompts/intern");
const { addNewPrompt } = require("./src/prompts/single");

// require classes
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

const interns = [];
const engineers = [];
const managers = [];


// function that starts from the begining
console.log("Please build your team");
const start = () => {
  const prompts = [...commonPrompts, ...managerPrompts, addNewPrompt];
  return inquirer.prompt(prompts);
};


// create a function that will take the answer from the add another employee question, and then filter through the kinds of employees to determine next questions
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

const constructorMaker = (constructorMade) => {

  switch (constructorMade.title) {

    case "intern":
      let newIntern = new Intern(constructorMade.internSchool, constructorMade.memberName, constructorMade.memberId,constructorMade.memberEmail);
      interns.push(newIntern);
      console.log(interns);
      break

      case "engineer":
      let newEngineer = new Engineer(constructorMade.engineerGithub, constructorMade.memberName, constructorMade.memberId,constructorMade.memberEmail);
      engineers.push(newEngineer);
      break

      case "manager":
      let newManager = new Manager(constructorMade.managerOffice, constructorMade.memberName, constructorMade.memberId,constructorMade.memberEmail)
      managers.push(newManager);
      break
  }

};


// function to start to generate html page
const generateHtml = (questionAnswers) => {

const finishedCards = generateEmployeeCards(questionAnswers);

// The part of the html that won't be changing
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Stack your Squad</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css" />
   
</head>

<body class="page">
<div class="row">
${finishedCards}
</div>
</body>
`;
};

const generateEmployeeCards = (questionAnswers) => {
  let employeeCards = "";
  console.log("first prompt answers")
  // console.log(firstPromptAnswers);

  for (let index = 0; index < questionAnswers.length; index++) {
    const employee = questionAnswers[index];
    const newCard = 
    `<div class="card" style="width: 18rem;">
        <div class="column">
          <div class="card-body">
            <h5 class="card-title">${employee.memberName}</div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">Employee Role: ${employee.addNew}</li>
            <li class="list-group-item">ID: ${employee.memberId}</li>
            <li class="list-group-item">E-mail: <a href="mailto:${employee.memberEmail}" class="card-link">${employee.memberEmail}</a></li>
            <li class="list-group-item">Github: <a href="https://github.com/${employee.engineerGithub}" class="card-link">${employee.engineerGithub}</a></li>
            <li class="list-group-item">Office Number: ${employee.managerOffice}</li>
          </ul>
        
      </div>
  </div>`;
  employeeCards += newCard;
  }

  return employeeCards;
};




start().then(async(firstPromptAnswers) => {
  firstPromptAnswers.title = "manager";

  let constructorMade = constructorMaker(firstPromptAnswers);


  // Make an array that will hold all question answers starting with first answer object
  const questionAnswers = [constructorMade];
  
  // Check to see if no more employees, else ask specific prompts for employees
  if (firstPromptAnswers.addNew === "no more employees") {
    return;
  }
  let addMoreEmployees = firstPromptAnswers.addNew;
  let additionalPrompts = getAdditionalPrompts(firstPromptAnswers.addNew);

  // find a way to update when we are adding more employees through the add new
  while (addMoreEmployees != "no more employees") {
    // User must answer all questions before moving on in code thats what the await is for
    const allDone = await inquirer.prompt([...commonPrompts, ...additionalPrompts, addNewPrompt]);
    allDone.title = addMoreEmployees;
    additionalPrompts = getAdditionalPrompts(allDone.addNew);
    console.log("all done")
    console.log(allDone);
    questionAnswers.push(allDone)
    let constructorMadeMore = constructorMaker(allDone);
    addMoreEmployees = allDone.addNew;
    questionAnswers.push(constructorMadeMore)
    console.log ("constructor made more")
    console.log(constructorMadeMore)
  }
  const finishedHtml = generateHtml(questionAnswers);
  console.log("index generated!");
  const response = await writeToFile("./dist/index.html", finishedHtml);
});

