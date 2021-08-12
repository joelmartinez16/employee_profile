const Manager = require('../lib/Manager');

const employeeName = "Juanita";
const id ="27";
const email = "juanita@email.com";
const officeNumber= "51"

describe('Employee Class', () => {
    it('Should get employee class', ()=> {
       const manager = new Manager(employeeName, id, email, officeNumber);
       expect(manager.employeeName).toBe("Juanita");
       expect(manager.id).toBe("27");
       expect(manager.email).toBe("juanita@email.com"); 
       expect(manager.officeNumber).toBe("51");
    })   


describe("Get role method", () => {
    it("Should get the Managers role", () => {
     const manager = new Manager(employeeName, id, email, officeNumber);
     expect(manager.getRole()).toBe("Manager");
    })
});

describe('Get office method', () => {
    it('Should get the office Number', ()=> {
        const manager = new Manager(employeeName, id, email, officeNumber);
        expect(manager.getOffice()).toBe("51");   
    })
});

describe("createHTML method", () => {
    it("Should display HTML for Manager", () => {
        const manager = new Manager(employeeName, id, email, officeNumber);
        expect(manager.createHTML()).toContain(`
        <main>
        <div class="container">
          <div class="row row-cols-1 row-cols-md-3 g-4 align-item-center justify-content-center">
            
          <div class="col p-0">
            <div class="card m-3">
              <div class="card-header text-white text-center manager-bg name-font">
                  <h4>Juanita</h4>
                  <h4><i class="fas fa-briefcase"></i> Manager</h4>
              </div>
              <div class="card-body body-bg">
                <ul class="list-group list-group-flush text">
                  <li class="list-group-item"><b>ID:</b> 27</li>
                  <li class="list-group-item"><b>Email:</b> <a href="mailto:juanita@email.com">juanita@email.com</a></li>
                  <li class="list-group-item"><b>Office Number:</b> 51</li>
                </ul>
              </div>
            </div>
          </div>
          `
          )
    } )
 });
}); 