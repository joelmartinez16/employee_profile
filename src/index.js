const inquirer = require('inquirer');
const fs = require('fs');


const engineer = require('../lib/engineer');
const intern = require('../lib/intern');
const manager = require('../lib/manager');

const template = fs.readFileSync('./dist/index.html', 'utf-8')
const employees = [];

function addEmployee() {
    inquirer.prompt([{
        type: "input",
        name: "name",
        message: "Enter employees name",
    },
    {
        type: "List",
        message: "Select role",
        choices: ["Intern", "Engineer", "Manager"],
        name: "role"
    },
    {
        message: "Enter ID",
        name: "id"
    },
    {
        message: "Enter email",
        name:"email"
    }])
    .then(function({name, role, id, email}){
        let employeeInfo = "";
        if (role === "engineer") {
            employeeInfo= "GitHub Name";
        }else if (role === "intern") {
            employeeInfo = "Whats your schools name?";
        }else if (role === "manager") {
            employeeInfo = "Office Number";
        }else {
            generateHTML();
        }
    })
}

const init = () => {
    console.log("Time to build your team");
    addEmployee();
};

const renderHTML = (employees) => {
    return employees.map(a => a.createHTML()).join("");
}
const generateHTML = () => {
    fs.writeFile('./dist/index.html',  template.replace("{{body}}", renderHTML(employees)), (err) => {
        err ? console.log(err) : console.log("Team successfully built!")
    })
}

init();