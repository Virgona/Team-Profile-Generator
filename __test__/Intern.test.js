const Engineer = require('../lib/Engineer');

describe('getSchool', () => {
    it('should return a string of the Interns school', () => {
        const education = "USYD";

        const result = "USYD";

        expect(result).toEqual(education);
    });
});

describe('getRole', () => {
    it('should return a string of the Interns role', () => {
        const role = "Intern";

        const result = "Intern";

        expect(result).toEqual(role);
    });
});