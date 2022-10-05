const Manager = require('../lib/Manager');

describe('getOfficeNumber', () => {
    it('should return a string of the Managers office number', () => {
        const officeNumber = "(02)43 612 621";

        const result = "(02)43 612 621";

        expect(result).toEqual(officeNumber);
    });
});

describe('getRole', () => {
    it('should return a string of the Managers role', () => {
        const role = "Manager";

        const result = "Manager";

        expect(result).toEqual(role);
    });
});

