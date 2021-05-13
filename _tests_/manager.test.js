const Manager = require('../lib/manager');

describe('Manager', () => {
    describe('getRole', () => {
        it('should return \'Manager\'', () => {
            const role = 'Manager';

            const managerRole = new Manager({}).getRole();

            expect(managerRole).toEqual(role);
        });
    });
});