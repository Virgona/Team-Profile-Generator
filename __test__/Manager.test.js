const Manager = require('../lib/Manager');

describe('getOfficeNumber', () => {
    it('should return a string of the Managers office number', () => {
        const manager = new Manager('Troy', 3, 'troy@boss.com', '43 8888 888')

        expect(manager.getOfficeNumber()).toEqual('43 8888 888');
    });
});

describe('getRole', () => {
    it('should return a string of the Managers role', () => {

        const manager = new Manager('Troy', 3, 'troy@boss.com', '43 8888 888')

        expect(manager.getRole()).toEqual('Manager');
    });
});

