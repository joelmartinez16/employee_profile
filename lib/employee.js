class Employee  {
    constructor (employeeName, id, email) {
        this.employeeName= employeeName;
        this.id= id;
        this.email = email;
    }
    getName() {
        return this.employeeName;
    }
    getID() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return "Employee"
    }
}

module.exports = Employee;