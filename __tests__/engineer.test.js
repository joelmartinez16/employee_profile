const Engineer = require("../lib/Engineer");

const employeeName = "Joel";
const id = "8";
const email = "joemartinez87@hotmail.com";
const gitHub = "joelmartinez16"

describe('Engineer', () => {
    it('Should create a new Engineer', ()=> {
        const engineer = new Engineer(employeeName, id, email, gitHub);
        expect(engineer.employeeName).toBe("Joel");
        expect(engineer.id).toBe("8");
        expect(engineer.email).toBe("joemartinez87@hotmail.com");
        expect(engineer.gitHub).toBe("joelmartinez16");

    });


describe('getRole()', () => {
    it('Should get the Engineers role', ()=> {
        const engineer = new Engineer(employeeName, id, email, gitHub);  
        expect(engineer.getRole()).toBe("Engineer");  
    })
});

describe('getGithub()', () => {
    it('Should get Engineers gitHub', ()=>{
        const engineer = new Engineer(employeeName, id, email, gitHub);
        expect(engineer.getGithub()).toBe("joelmartinez16");
    })
});



describe("HTML", () => {
    it("Should display HTML for engineer", () => {
        const engineer = new Engineer(employeeName, id, email, gitHub);
        expect(engineer.createHTML()).toContain(`
        
        <div class="col p-0">
        <div class="card m-3">
          <div class="card-header text-white text-center engineer-bg name-font">
              <h4>Joel</h4>
              <h4><i class="fas fa-laptop-code"></i> Engineer</h4>
          </div>
          <div class="card-body body-bg">
            <ul class="list-group list-group-flush text">
              <li class="list-group-item"><b>ID:</b> 8</li>
              <li class="list-group-item"><b>Email:</b> <a href="mailto:joemartinez87@hotmail.com">joemartinez87@hotmail.com</a></li>
              <li class="list-group-item"><b>GitHub:</b> <a href="https://github.com/joelmartinez16" target="_blank">joelmartinez16</a></li>
            </ul>
          </div>
        </div>
      </div>
      
        `)
    } )
 });
});
