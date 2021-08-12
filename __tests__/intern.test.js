const Intern = require('../lib/Intern');

const employeeName = "Cheyenne";
const id = "7";
const email = "cheyenne@email.com";
const school = "CSUSB"

describe('Intern', () => {
   it('Should create intern', () => {
       const intern = new Intern(employeeName, id, email, school)
       expect(intern.employeeName).toBe("Cheyenne");
       expect(intern.id).toBe("7");
       expect(intern.email).toBe("cheyenne@email.com");
       expect(intern.school).toBe("CSUSB");
    })


describe('getRole()', () => {
   it('Should get the Inters role', () => {
       const intern = new Intern(employeeName, id, email, school);
       expect(intern.getRole()).toBe('Intern')
   })
})

describe('getSchool()', () => {
    it('Should get the Interns school', ()=> {
        const intern = new Intern(employeeName, id, email, school);
        expect(intern.getSchool()).toBe("CSUSB");
    })
});

describe("createHTML", () => {
    it("Should display HTML for the intern", () => {
        const intern = new Intern(employeeName, id, email, school);
        expect(intern.createHTML()).toContain(`  
        <div class="col p-0">
          <div class="card m-3">
            <div class="card-header text-white text-center intern-bg name-font">
                <h4>Cheyenne</h4>
                <h4><i class="fas fa-graduation-cap"></i> Intern</h4>
            </div>
            <div class="card-body body-bg">
              <ul class="list-group list-group-flush text">
                <li class="list-group-item"><b>ID:</b> 7</li>
                <li class="list-group-item"><b>Email:</b> <a href="mailto:cheyenne@email.com">cheyenne@email.com</a></li>
                <li class="list-group-item"><b>School:</b> CSUSB</li>
              </ul>
            </div>
          </div>
        </div>
  
      `
    );
   })
 })
}); 