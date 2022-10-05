const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.number = officeNumber;
    }

    getOfficeNumber() {
        return officeNumber;
    }

    getRole() {
        return 'Manager';
    }
}