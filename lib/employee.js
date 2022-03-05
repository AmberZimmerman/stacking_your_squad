// Make a parent class for Employee
class Employee {
    constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    }
    getName() {
        
    }
    getId() {

    }
    getEmail() {

    }
    getRole() {
        return 'Employee'
    }

}

const employee = new Employee("Amber", 22, "ajz1221@gmail.com");

console.log(employee.name);