const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return "Intern";
    }
    generateHTML() {
        return `
        <div class="col p-0">
            <div class="card m-3">
              <div class="card-header text-white text-center intern-bg name-font">
                  <h4>${this.name}</h4>
                  <h4><i class="fas fa-graduation-cap"></i> Intern</h4>
              </div>
              <div class="card-body body-bg">
                <ul class="list-group list-group-flush text">
                  <li class="list-group-item"><b>${this.id}</b> 27</li>
                  <li class="list-group-item"><b>Email:</b> <a href="${this.email}">${this.email}</a></li>
                  <li class="list-group-item"><b>School:</b>${this.school}</li>
                </ul>
              </div>
            </div>
          </div>
      `
    }
}

module.exports = Intern;