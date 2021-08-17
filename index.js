const inquirer = require('inquirer');
const fs = require('fs');


const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const template = fs.readFileSync('./src/main.html', 'utf-8')
const employees = [];

const manager = () => {
    return inquirer
    .prompt([
    {
        type: "input",
        name: "name",
        message: "What is the managers name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is your ID?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
    {
        type: "input",
        name:"officeNumber",
        message: "What is your office number?"    
        
    },
    {
        type: "list",
        name: "addEmployee",
        message: "Who would you like add?",
        choices: ["Engineer", "Intern", "Quit"]
    }
])
    .then((res) => {
        const manager = new Manager(res.name, res.id, res.email, res.officeNumber);
        
        employees.push(manager);

        if(res.addEmployee === "Engineer") {
            engineer();
        } else if (res.addEmployee === "Intern") {
            intern();
        }else {
            renderHTML();
        }
    })
}


const engineer = () => {
    return inquirer
    .prompt([
    {
        type: "input",
        name: "name",
        message: "What is the engineers name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is your ID?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
    {
        type: "input",
        name:"gitHub",
        message: "What is your GitHub username?"    
        
    },
    {
        type: "list",
        name: "addEmployee",
        message: "Who would you like add?",
        choices: ["Engineer", "Intern", "Quit"]
    },
])
    .then((res) =>{
        const engineer = new Engineer(res.name, res.id, res.email, res.gitHub);
        employees.push(engineer);
        
        if(res.addEmployee === "Engineer") {
            engineer();
        } else if (res.addEmployee === "Intern") {
            intern();
        }else {
            generateHTML();
        }
    })
}
    const intern = () => {
        return inquirer
        .prompt([
        {
            type: "input",
            name: "name",
            message: "What is the Interns name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is your intern ID?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your email address?"
        },
        {
            type: "input",
            name:"school",
            message: "What is the name of your shool?"    
            
        },
        {
            type: "list",
            name: "addEmployee",
            message: "Who would you like add?",
            choices: ["Engineer", "Intern", "Quit", ]
        },])
        .then((res) =>{
            const intern = new Intern(res.name, res.id, res.email, res.school);
            employees.push(intern);
            if(res.addEmployee === "Engineer") {
                engineer();
            } else if (res.addEmployee === "Intern") {
                intern();
            }else {
                generateHTML();
            }
        })
    }
const init = () => {
    console.log("Time to build your team");
    manager();
};

const renderHTML = (employees) => {
    return employees.map(a => a.generateHTML()).join("");
}
const generateHTML = () => {
    fs.writeFile('./dist/index.html',  template.replace("{{body}}", renderHTML(employees)), (err) => {
        err ? console.log(err) : console.log("Team successfully built!")
    });
}

init();