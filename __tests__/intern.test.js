const intern = require('../lib/intern');

describe('school', () => {
    const schoolName = "CSUMB";
    const e = new intern("New intern", "id", "email@mail.com", schoolName);
    expect(e.school).toBe(schoolName);
});

describe('getRole()', () => {
    const role = "intern";
    const e = new intern("New intern", "id", "email@mail.com", "CSUMB");
    expect(e.getRole()).toBe(role);
})

describe('getSchool()', () => {
    const schoolName = "CSUMB";
    const e = new intern("New intern", "id", "email@mail.com", schoolName);
    expect(e.getSchool()).toBe(schoolName);
});

describe("HTML", () => {
    it("Should display HTML for engineer", () => {
        const intern = new intern(employeeName, id, email, schoolName);
        expect(intern.createHTML()).toContain(` <div class="row"> <!--Intern -->
        <div class="col s12 m6 l4"> 
            <div class="card center-align hoverable">
                <p class="name">Cheyenne</p>
                <i class="fas fa-graduation-cap fa-3x"></i>
                <p>Intern</p>
                <div class="card-content">
                    <p>ID: 10</p>
                    <p>School: UCLA</p>
                <div class="card-action">
                    <a href="mailto:cheyenne@email.com" class="waves-effect waves-light btn"><i class="material-icons right">Email</i></a>
                </div>
            </div>
        </div>
    </div> `)
    } )
 })