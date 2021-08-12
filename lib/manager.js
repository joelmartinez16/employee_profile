const Employee = require('./Employee');

class Manager extends Employee {
    constructor (employeeName, id, email, officeNumber) {
        super(employeeName, id, email);
        this.officeNumber= officeNumber;
    }
    getRole() {
        return "Manager"
    }
    getOffice() {
        return this.officeNumber
    }
    createHTML() {
        return `
        <main>
        <div class="container">
          <div class="row row-cols-1 row-cols-md-3 g-4 align-item-center justify-content-center">
            
          <div class="col p-0">
            <div class="card m-3">
              <div class="card-header text-white text-center manager-bg name-font">
                  <h4>${this.employeeName}</h4>
                  <h4><i class="fas fa-briefcase"></i> Manager</h4>
              </div>
              <div class="card-body body-bg">
                <ul class="list-group list-group-flush text">
                  <li class="list-group-item"><b>${this.id}</b> 27</li>
                  <li class="list-group-item"><b>Email:</b> <a href="${this.email}">juanita@email.com</a></li>
                  <li class="list-group-item"><b>Office Number:</b>${this.officeNumber}</li>
                </ul>
              </div>
            </div>
          </div>
        `
    }
}

module.exports = Manager;