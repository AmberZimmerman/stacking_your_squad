// Make a class for Manager that also has an office number and will override getRole() to return Manager
const Employee = require("./employee")


class Manager extends Employee {
    constructor(officeNumber, name, id, email) {
        super(name, id, email)
        this.officeNumber = officeNumber;
    }
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;

