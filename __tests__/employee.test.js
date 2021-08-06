const employee = require('../lib/employee');


describe('employee', () => {
    it("will add a new employee", () => {
        const e = new employee();
        expect(typeof(e)).toBe("employeeName")
    })
});

it("employeeName", () => {
    const name ="Joel";
    const e= new employee(name);
    expect(e.employeeName).toBe(name)
});

it("id", () => {
    const id = 8;
    const e = new employee("New Employee", id);
    expect(e.id).toBe(id)
});

it("email", () => {
    const testEmail = "email@mail.com";
    const e = new employee("New Employee", testEmail);
    expect(e.email).toBe(testEmail)
});

describe("getName", () => {
    it("getName()", () => {
        const newName= "Cheyenne";
        const e = new employee(newName);
        expect(e.getName()).toBe(newName);
    })
});

describe("getId", () => {
    it("getId()", () => {
        const newId= 10;
        const e = new employee("New Employee", newId);
        expect(e.getId()).toBe(newId);
    })
});

describe("getEmail", () => {
    it("getEmail()", () => {
        const newEmail= "email@mail.com";
        const e = new employee("New Employee", 10, newEmail);
        expect(e.getEmail()).toBe(newEmail);
    })
});

describe("getRole", () => {
    it("getRole()", () => {
        const role= "employee";
        const e = new employee("New Employee", 10, "email@mail.com");
        expect(e.getRole()).toBe(role);
    })
});

