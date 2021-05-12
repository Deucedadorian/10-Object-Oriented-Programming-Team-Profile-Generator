class Employee {
    constructor(input) {
        this.name = input.name;
        this.id = input.id;
        this.email = input.email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return this.role;
    } // return 'Employee
}

const employee = new Employee({
    name: 'Billy',
})
console.log(employee.getName());

module.exports = Employee;