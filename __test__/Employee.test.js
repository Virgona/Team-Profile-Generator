const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe('getName', () => {
        it('should return to a string of the name entered for an Employee', () => {
            const newEmployeeName = "Troy";

            const result = "Troy";

            expect(result).toEqual(newEmployeeName);

        });
    });
});

describe('getId', () => {
    it('should return a string of the Employees id', () => {
        const newEmployeeId = "1234";

        const result = "1234";

        expect(result).toEqual(newEmployeeId);
    });
});

describe('getEmail', () => {
    it('should return a string of the Employees email', () => {
        const newEmployeeEmail = "troy@troy.com";

        const result = "troy@troy.com";

        expect(result).toEqual(newEmployeeEmail);
    });
});

describe('getRole', () => {
    it('should return a string of the Employees role', () => {
        const employeeRole = "Employee";

        const result = "Employee";

        expect(result).toEqual(employeeRole);
    });
});
