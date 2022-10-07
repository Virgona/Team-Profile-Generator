const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe('getName', () => {
        it('should return to a string of the name entered for an Employee', () => {

            const employee = new Employee("Troy", 1, "Troy@troy.com")

            expect(employee.getName()).toEqual("Troy");

        });
    });
});

describe('getId', () => {
    it('should return a string of the Employees id', () => {

        const employee = new Employee('Troy', 1, "troy@troy.com")

        expect(employee.getId()).toEqual(1);
    });
});

describe('getEmail', () => {
    it('should return a string of the Employees email', () => {
        const employee = new Employee('Troy', 1, "troy@troy.com")

        expect(employee.getEmail()).toEqual("troy@troy.com");
    });
});

describe('getRole', () => {
    it('should return a string of the Employees role', () => {
        const employee = new Employee('Troy', 1, 'troy@troy.com')

        expect(employee.getRole()).toEqual('Employee');
    });
});
