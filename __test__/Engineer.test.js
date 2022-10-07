const Engineer = require('../lib/Engineer');

describe('getGithub', () => {
    it('should return a string of the Engineers Gibhub username', () => {
        const engineer = new Engineer("troy", 1, "troy@troy.com", "troyboy")

        expect(engineer.getGithub()).toEqual("troyboy")
    });
});

describe('getRole', () => {
    it('should return a string of the Engineers role', () => {
        const engineer = new Engineer("troy", 1, "troy@troy.com", "troyboy")

        expect(engineer.getRole()).toEqual('Engineer');
    });
});
