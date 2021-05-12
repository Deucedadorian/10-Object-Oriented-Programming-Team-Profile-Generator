const Employee = require('./Employee');

class Manager extends Employee {
    constructor(input) {
        this.officeNumber = officeNumber;
        super(input)
    }
    
    getRole() // overridden to return namager
}

module.exports = Manager;