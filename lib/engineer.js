const Employee = require('./Employee');

class Engineer extends Employee {
    constructor (name, id, email, gitHub) {
        super(name, id, email);
        this.gitHub= gitHub;
    }
    getGithub() {
        return this.gitHub;
    }
    getRole() {
        return  "Engineer";
    }
    generateHTML() {
        return ` 
        <div class="col p-0">
        <div class="card m-3">
          <div class="card-header text-black text-center engineer-bg name-font">
              <h4>${this.name}</h4>
              <h4><i class="fas fa-user-cog"></i> Engineer</h4>
          </div>
          <div class="card-body body-bg">
            <ul class="list-group list-group-flush text">
              <li class="list-group-item"><b>${this.id}</b> ${this.id}</li>
              <li class="list-group-item"><b>Email:</b> <a href="${this.email}">${this.email}</a></li>
              <li class="list-group-item"><b>Github:</b>${this.gitHub}</li>
            </ul>
          </div>
        </div>
      </div>`
    }
}

module.exports= Engineer;