const Intern = require('../lib/Intern');

describe('getSchool', () => {
    it('should return a string of the Interns school', () => {
        const intern = new Intern('Troy', 2, 'troy@troy.com', 'USYD')

        expect(intern.getSchool()).toEqual('USYD');
    });
});

describe('getRole', () => {
    it('should return a string of the Interns role', () => {

        const intern = new Intern('Troy', 2, 'troy@troy.com', 'USYD')

        expect(intern.getRole()).toEqual('Intern');
    });
});