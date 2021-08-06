const manager = require('../lib/manager');

test('officeNumber', () => {
    const office = 12;
    const e = new manager("New Manager", 1, "email@mail.com", office);
    expect(e.officeNumber).toBe(office);
});

test("getRole()", () => {
    const role = "Manager";
    const e= new manager("New Manager", 1, "email@mail.com", 12);
    expect(e.getRole()).toBe(role);
});

test('getOffice()', () => {
    const office = 12;
    const e = new manager("New Manager", 1, "email@mail.com", office);
    expect(e.getOffice()).toBe(office);
});

describe("HTML", () => {
    it("Should display HTML for engineer", () => {
        const manager = new manager(employeeName, id, email, officeNumber);
        expect(manager.createHTML()).toContain(`<div class="row"> <!-- Manager -->
        <div class="col s12 m6 l4"> 
            <div class="card center-align hoverable">
                <p class="name">Juanita</p>
                <i class="fas fa-user-tie fa-3x"></i>
                <p>Manager</p>
                <div class="card-content">
                    <p>ID: 27</p>
                    <p>Office#: 51</p>
                <div class="card-action">
                    <a href="mailto:juanita@email.com" class="waves-effect waves-light btn"><i class="material-icons right">Email</i></a>
                </div>
            </div>
        </div>
    </div>`)
    } )
 })