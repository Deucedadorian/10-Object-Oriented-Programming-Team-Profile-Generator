const Employee = require('../lib/employee');

describe('Employee', () => {
    describe('getName', () => {
        it('should take a name given by the user', () => {
            const inputName = 'Bob'

            const name = new Employee().getName(inputName);

            expect(name).toEqual(inputName);
        });
    });
});