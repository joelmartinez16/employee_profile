const Employee = require('./Employee');

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber= officeNumber;
    }
    getRole() {
        return "Manager"
    }
    getOffice() {
        return this.officeNumber
    }
    generateHTML() {
        return `
        
          <div class="col p-0">
            <div class="card m-3">
              <div class="card-header text-white text-center manager-bg name-font">
                  <h4>${this.name}</h4>
                  <h4><i class="fas fa-briefcase"></i> Manager</h4>
              </div>
              <div class="card-body body-bg">
                <ul class="list-group list-group-flush text">
                  <li class="list-group-item"><b>${this.id}</b> 27</li>
                  <li class="list-group-item"><b>Email:</b> <a href="${this.email}">${this.email}</a></li>
                  <li class="list-group-item"><b>Office Number:</b>${this.officeNumber}</li>
                </ul>
              </div>
            </div>
          </div>
        `
    }
}

module.exports = Manager;