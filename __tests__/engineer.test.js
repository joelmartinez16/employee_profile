const Engineer = require("../lib/Engineer");

const name = "Joel";
const id = "8";
const email = "joemartinez87@hotmail.com";
const gitHub = "joelmartinez16"

describe('Engineer', () => {
    it('Should create a new Engineer', ()=> {
        const engineer = new Engineer(name, id, email, gitHub);
        expect(engineer.name).toBe("Joel");
        expect(engineer.id).toBe("8");
        expect(engineer.email).toBe("joemartinez87@hotmail.com");
        expect(engineer.gitHub).toBe("joelmartinez16");

    });


describe('getRole()', () => {
    it('Should get the Engineers role', ()=> {
        const engineer = new Engineer(name, id, email, gitHub);  
        expect(engineer.getRole()).toBe("Engineer");  
    })
});

describe('getGithub()', () => {
    it('Should get Engineers gitHub', ()=>{
        const engineer = new Engineer(name, id, email, gitHub);
        expect(engineer.getGithub()).toBe("joelmartinez16");
    })
});




});
