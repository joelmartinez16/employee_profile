const Intern = require('../lib/Intern');

const name = "Cheyenne";
const id = "7";
const email = "cheyenne@email.com";
const school = "CSUSB"

describe('Intern', () => {
   it('Should create intern', () => {
       const intern = new Intern(name, id, email, school)
       expect(intern.name).toBe("Cheyenne");
       expect(intern.id).toBe("7");
       expect(intern.email).toBe("cheyenne@email.com");
       expect(intern.school).toBe("CSUSB");
    })


describe('getRole()', () => {
   it('Should get the Inters role', () => {
       const intern = new Intern(name, id, email, school);
       expect(intern.getRole()).toBe('Intern')
   })
})

describe('getSchool()', () => {
    it('Should get the Interns school', ()=> {
        const intern = new Intern(name, id, email, school);
        expect(intern.getSchool()).toBe("CSUSB");
    })
});


}); 