const employee = require('../lib/employee');

class intern extends employee {
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
    generateHTML() {
        return `<div class="row"> <!--Intern -->
        <div class="col s12 m6 l4"> 
            <div class="card center-align hoverable">
                <p class="name">${this.employeeName}</p>
                <i class="fas fa-graduation-cap fa-3x"></i>
                <p>Intern</p>
                <div class="card-content">
                    <p>ID: ${this.id}</p>
                    <p>School: ${this.school}</p>
                <div class="card-action">
                    <a href="mailto:${this.email}" class="waves-effect waves-light btn"><i class="material-icons right">${this.email}</i></a>
                </div>
            </div>
        </div>
    </div>`
    }
}

module.exports = intern;