// Make a class for Manager that also has an office number and will override getRole() to return Manager
class Manager {
    constructor(officeNumber) {
        this.officeNumber = officeNumber;
    }
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;


<div class="card" style="width: 18rem;">
        <div class="column">
          <div class="card-body">
            <h5 class="card-title">${employee.memberName}</div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">Employee Role: ${employee.addNew}</li>
            <li class="list-group-item">ID: ${employee.memberId}</li>
            <li class="list-group-item">E-mail: <a href="mailto:${employee.memberEmail}" class="card-link">${employee.memberEmail}</a></li>
            <li class="list-group-item">Office Number: ${employee.managerOffice}</li>
          </ul>
        
      </div>
  </div>`;