const { it } = require('@jest/globals');
const { describe } = require('yargs');
const engineer = require('../lib/engineer');


describe('gitHub', () => {
    const gitHub = "Git Hub ";
    const e = new intern("New intern", "id", "email@mail.com", gitHub);
    expect(e.gitHub).toBe(gitHub);
});

describe('getRole()', () => {
    const role = "engineer";
    const e = new engineer("New intern", "id", "email@mail.com", "Git Hub");
    expect(e.getRole()).toBe(role);
})

describe('getGithub()', () => {
    const gitHub = "Git Hub ";
    const e = new intern("New intern", "id", "email@mail.com", schoolName);
    expect(e.getGithub()).toBe(gitHub);
});



describe("HTML", () => {
    it("Should display HTML for engineer", () => {
        const engineer = new engineer(employeeName, id, email, gitHub);
        expect(engineer.createHTML()).toContain(`<div class="row"> <!-- Engineer -->
        <div class="col s12 m6 l4"> 
            <div class="card center-align hoverable">
                <p class="name">Joel</p>
                <i class="fas fa-user-cog fa-3x"></i>
                <p>Engineer</p>
                <div class="card-content">
                    <p>ID: 8</p>
                    <p>Github:<a href="https://github.com/joelmartinez16">Joel Martinez</a></p>
                <div class="card-action">
                    <a href="mailto:joemartinez87@hotmail.com" class="waves-effect waves-light btn"><i class="material-icons right">Email</i></a>
                </div>
            </div>
        </div>
    </div>`)
    } )
 })
