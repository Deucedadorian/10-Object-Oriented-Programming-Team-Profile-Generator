const Employee = require('./Employee');

class Intern extends Employee {
constructor(school) {
    this.school = school;
}
    
    getSchool(school) {
        return school;
    }

    getRole() {
        return 'Intern';
    } // overridden to return 'Intern'

}