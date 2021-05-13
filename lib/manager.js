const Employee = require('./Employee');

class Manager extends Employee {
    constructor(input) {
        super(input);
        this.officeNumber = input.officeNumber;
    }
    
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;