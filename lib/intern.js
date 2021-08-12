const Employee = require('./Employee');

class Intern extends Employee {
    constructor(employeeName, id, email, school) {
        super(employeeName, id, email);
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return "Intern";
    }
    createHTML() {
        return `
        <div class="col p-0">
        <div class="card m-3">
          <div class="card-header text-white text-center intern-bg name-font">
              <h4>${this.employeeName}</h4>
              <h4><i class="fas fa-graduation-cap"></i> Intern</h4>
          </div>
          <div class="card-body body-bg">
            <ul class="list-group list-group-flush text">
              <li class="list-group-item"><b>${this.id}</b> 7</li>
              <li class="list-group-item"><b>Email:</b> <a href="${this.email}">Email</a></li>
              <li class="list-group-item"><b>School:</b> ${this.school}</li>
            </ul>
          </div>
        </div>
      </div>
      `
    }
}

module.exports = Intern;