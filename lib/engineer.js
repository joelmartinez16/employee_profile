const employee = require('../lib/employee');

class engineer extends employee {
    constructor (employeeName, id, email, gitHub) {
        super(employeeName, id, email);
        this.gitHub= gitHub;
    }
    getGithub() {
        return this. gitHub;
    }
    getRole() {
        return  "Engineer";
    }
    generateHTML() {
        return ` <div class="row"> <!-- Engineer -->
        <div class="col s12 m6 l4"> 
            <div class="card center-align hoverable">
                <p class="name">${this.employeeName}</p>
                <i class="fas fa-user-cog fa-3x"></i>
                <p>Engineer</p>
                <div class="card-content">
                    <p>ID: ${this.id}</p>
                    <p>Github:<a href="https://github.com/${this.github}">${this.github}</a></p>
                <div class="card-action">
                    <a href="mailto:${this.email}" class="waves-effect waves-light btn"><i class="material-icons right">send</i>${this.email}</a>
                </div>
            </div>
        </div>
    </div>`
    }
}

module.exports=engineer;