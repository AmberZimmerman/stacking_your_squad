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

  const prompts = [addNewPrompt];

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
  let newCard = "";

  for (let index = 0; index < questionAnswers.length; index++) {
    const employee = questionAnswers[index];
    
    console.log("THIS IS QUESTION ANSWERS")
    console.log(questionAnswers)
    
    switch (employee.title) {

      case 'intern':


      newCard = `<div class="card" style="width: 18rem;">
        <div class="column">
          <div class="card-body">
            <h5 class="card-title">${employee.memberName}</div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">Employee Role: ${employee.title}</li>
            <li class="list-group-item">ID: ${employee.memberId}</li>
            <li class="list-group-item">E-mail: <a href="mailto:${employee.memberEmail}" class="card-link">${employee.memberEmail}</a></li>
            <li class="list-group-item">School: ${employee.internSchool}</li>
          </ul>
        
      </div>
  </div>`;
  employeeCards += newCard;
  break;
  
  case 'manager':

    newCard = `<div class="card" style="width: 18rem;">
        <div class="column">
          <div class="card-body">
            <h5 class="card-title">${employee.memberName}</div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">Employee Role: ${employee.title}</li>
            <li class="list-group-item">ID: ${employee.memberId}</li>
            <li class="list-group-item">E-mail: <a href="mailto:${employee.memberEmail}" class="card-link">${employee.memberEmail}</a></li>
            <li class="list-group-item">Office Number: ${employee.managerOffice}</li>
          </ul>
        
      </div>
  </div>`;
  employeeCards += newCard;
  break

  case 'engineer':


      newCard = `<div class="card" style="width: 18rem;">
        <div class="column">
          <div class="card-body">
            <h5 class="card-title">${employee.memberName}</div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">Employee Role: ${employee.title}</li>
            <li class="list-group-item">ID: ${employee.memberId}</li>
            <li class="list-group-item">E-mail: <a href="mailto:${employee.memberEmail}" class="card-link">${employee.memberEmail}</a></li>
            <li class="list-group-item">Github: <a href="https://github.com/${employee.engineerGithub}" class="card-link">${employee.engineerGithub}</a></li>
          </ul>
        
      </div>
  </div>`;
  employeeCards += newCard;
  break
  }
}

  return employeeCards;
};




start().then(async(firstPromptAnswers) => {
  
  // adding a title property to first prompt answers based on what role the user selects
  firstPromptAnswers.title = firstPromptAnswers.addNew;
  console.log("----1st pr-----")
  console.log(firstPromptAnswers)
  
  constructorMaker(firstPromptAnswers.title);
  console.log("-----constructor made------")


  // Make an array that will hold all question answers starting with first answer object
  const questionAnswers = [];

  
  // Check to see if no more employees, else ask specific prompts for employees
  if (firstPromptAnswers.addNew === "no more employees") {
    return;
  }
  
  let employeeTitle = firstPromptAnswers.addNew;
  let additionalPrompts = getAdditionalPrompts(firstPromptAnswers.addNew);

  // find a way to update when we are adding more employees through the add new
  
  while (employeeTitle != "no more employees") {
    // User must answer all questions before moving on in code thats what the await is for
    const allOtherPromptAnswers = await inquirer.prompt([...commonPrompts, ...additionalPrompts, addNewPrompt]);
    console.log("-----Employee title------")
    console.log(employeeTitle)
    
    // adding a title property to the other prompt answers
    allOtherPromptAnswers.title = employeeTitle;
    
    // continue to look if we are adding other employees
    additionalPrompts = getAdditionalPrompts(allOtherPromptAnswers.addNew);
    console.log("-------additional prompts------")
    console.log(additionalPrompts)
    
    questionAnswers.push(allOtherPromptAnswers)
    
    employeeTitle = allOtherPromptAnswers.addNew;
   
  }
  const finishedHtml = generateHtml(questionAnswers);
  console.log("index generated!");
  const response = await writeToFile("./dist/index.html", finishedHtml);
});

