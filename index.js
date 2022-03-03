// Make a parent class for Employee
class Employee {
    constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    }
}

// Make a class for Manager that also has an office number and will override getRole() to return Manager
class Manager {
    constructor(officeNumber) {
        this.officeNumber = officeNumber;
    }
    getRole() {
        return 'Manager';
    }
}


// Make a class for Engineer that also has a github username, a getGithub() function and getRold() that returns Engineer
class Engineer {
    constructor(github) {
        this.github = github;
    }
}

// Make a class for Intern that also has school and a getSchool() function and getRole() that returns engineer
class Intern {
    constructor(school) {
        this.school = school;
    }
}