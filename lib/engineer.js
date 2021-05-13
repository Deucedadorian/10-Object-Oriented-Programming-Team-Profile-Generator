const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(input) {
    super(input);
    this.github = input.github;
  }

  getGithub() {
    return this.github;
  }

  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;