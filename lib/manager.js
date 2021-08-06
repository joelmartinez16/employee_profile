const employee = require('../lib/employee');

class manager extends employee {
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
    generateHTML() {
        return `<div class="row"> <!-- Manager -->
        <div class="col s12 m6 l4"> 
            <div class="card center-align hoverable">
                <p class="name">${this.employeeName}</p>
                <i class="fas fa-user-tie fa-3x"></i>
                <p>Manager</p>
                <div class="card-content">
                    <p>ID: ${this.id}</p>
                    <p>Office#: ${this.officeNumber}</p>
                <div class="card-action">
                    <a href="mailto:${this.email}" class="waves-effect waves-light btn"><i class="material-icons right">${this.email}</i></a>
                </div>
            </div>
        </div>
    </div>`
    }
}

module.exports = manager;