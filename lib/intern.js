// Make a class for Intern that also has school and a getSchool() function and getRole() that returns engineer
const Employee = require("./employee")

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

