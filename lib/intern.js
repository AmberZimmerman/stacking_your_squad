// Make a class for Intern that also has school and a getSchool() function and getRole() that returns engineer
class Intern extends Employee {
    constructor(school, name, id, email) {
        super(name, id, email)
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return 'Intern';
    }
}


module.exports = Intern;

<div class="card" style="width: 18rem;">
        <div class="column">
          <div class="card-body">
            <h5 class="card-title">${employee.memberName}</div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">Employee Role: ${employee.addNew}</li>
            <li class="list-group-item">ID: ${employee.memberId}</li>
            <li class="list-group-item">E-mail: <a href="mailto:${employee.memberEmail}" class="card-link">${employee.memberEmail}</a></li>
            <li class="list-group-item">School: ${employee.school}</li>
            </ul>
        
        </div>
    </div>`;