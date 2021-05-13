const Intern = require('../lib/intern');

describe('Intern', () => {
    describe('getSchool', () => {
        it('should return the school of the intern', () => {
            const inputSchool = 'schoolName';

            const internSchool = new Intern({school: 'schoolName'}).getSchool();

            expect(internSchool).toEqual(inputSchool);
        });
    });
    describe('getRole', () => {
        it('should return \'Intern\'', () => {
            const role = 'Intern';

            const internRole = new Intern({}).getRole();

            expect(internRole).toEqual(role);
        });
    });
});