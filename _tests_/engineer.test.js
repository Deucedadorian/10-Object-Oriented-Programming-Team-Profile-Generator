const Engineer = require('../lib/engineer');

describe('Engineer', () => {
    describe('getGithub', () => {
        it('should return the github account of the Engineer', () => {
            const inputGit = 'guthib';

            const engineerGit = new Engineer({github: 'guthib'}).getGithub();

            expect(engineerGit).toEqual(inputGit);
        });
    });
    describe('getRole', () => {
        it('should return \'Enggineer\'', () => {
            const role = 'Engineer';

            const engineerRole = new Engineer({}).getRole();

            expect(engineerRole).toEqual(role); 
        });
    });
});