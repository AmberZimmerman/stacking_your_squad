// Make a class for Engineer that also has a github username, a getGithub() function and getRold() that returns Engineer
const Employee = require("./employee")

class Engineer extends Employee{
    constructor(github, name, id, email) {
        super(name, id, email)
        this.github = github;
    }
    getGithub() {
      return this.github;
    }
    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;

/* <div class="card" style="width: 18rem;">
        <div class="column">
          <div class="card-body">
            <h5 class="card-title">${employee.memberName}</div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">Employee Role: ${employee.addNew}</li>
            <li class="list-group-item">ID: ${employee.memberId}</li>
            <li class="list-group-item">E-mail: <a href="mailto:${employee.memberEmail}" class="card-link">${employee.memberEmail}</a></li>
            <li class="list-group-item">Github: <a href="https://github.com/${employee.engineerGithub}" class="card-link">${employee.engineerGithub}</a></li>
          </ul>
        
      </div>
  </div>`; */