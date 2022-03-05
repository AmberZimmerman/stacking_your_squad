// Make a class for Manager that also has an office number and will override getRole() to return Manager
class Manager {
    constructor(officeNumber) {
        this.officeNumber = officeNumber;
    }
    getRole() {
        return 'Manager';
    }
}
