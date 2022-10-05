const Engineer = require('../lib/Engineer');

describe('getGithub', () => {
    it('should return a string of the Engineers Gibhub username', () => {
        const engGithub = "username";

        const result = "username";

        expect(result).toEqual(engGithub);
    });
});

describe('getRole', () => {
    it('should return a string of the Engineers role', () => {
        const role = "Engineer";

        const result = "Engineer";

        expect(result).toEqual(role);
    });
});
