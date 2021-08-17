const Manager = require('../lib/Manager');

const name = "Juanita";
const id ="27";
const email = "juanita@email.com";
const officeNumber= "51"

describe('Employee Class', () => {
    it('Should get employee class', ()=> {
       const manager = new Manager(name, id, email, officeNumber);
       expect(manager.name).toBe("Juanita");
       expect(manager.id).toBe("27");
       expect(manager.email).toBe("juanita@email.com"); 
       expect(manager.officeNumber).toBe("51");
    })   


describe("Get role method", () => {
    it("Should get the Managers role", () => {
     const manager = new Manager(name, id, email, officeNumber);
     expect(manager.getRole()).toBe("Manager");
    })
});

describe('Get office method', () => {
    it('Should get the office Number', ()=> {
        const manager = new Manager(name, id, email, officeNumber);
        expect(manager.getOffice()).toBe("51");   
    })
});


}); 