const Employee = require('../lib/Employee');

const employeeName = "Jerod";
const id = "4";
const email = "jerod@mail.com";


describe('Employee Class', () => {
    it("will add a new employee", () => {
        const employee = new Employee(employeeName, id, email);
        expect(employee.employeeName).toBe("Jerod");
        expect(employee.id).toBe("4");
        expect(employee.email).toBe("jerod@email.com");
});

describe("getName", () => {
    it('Should get employees name', () => {
        const employee= new Employee(employeeName, id, email);
        expect(employee.getName()).toBe("Jerod")
    })
});

describe("getId", () => {
    it('Should get employees Id', () =>{
        const employee= new Employee(employeeName, id, email);
        expect(employee.getId()).toBe("4");
    })
});

describe("getEmail", () => {
    it('Should get employees email', () =>{
        const employee= new Employee(employeeName, id, email);
        expect(employee.getEmail()).toBe("jerod@mail.com");
    })
});


describe("getRole", () => {
    it("Should get the employees role", () => {
        const employee = new Employee(employeeName, id, email);
        expect(employee.getRole()).toBe("Employee");
        });
    });
});
