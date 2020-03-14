const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Questions = require("./lib/Questions")
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

function init() {
    console.log("Welcome to the team builder")
    staffQuestion();
}

function staffQuestion() {
    inquirer.prompt(Questions.positionQuestion)
        .then(function (ans) {
            switch (ans.position) {
                case "Engineer":
                    buildEngineer();
                    break;

                case "Intern":
                    buildIntern();
                    break;

                case "Manager":
                    buildManager();
                    break;
            }
        })
}

function buildEngineer() {
    inquirer.prompt(Questions.engineerQuestions)
        .then(function (data) {
            let tempObj = new Engineer(data.engineer, data.engineerID, data.engineerName, data.engineerEmail, data.engineerGitHub);
            objToHTML.push(tempObj);
            buildStaff();
        })
}

function buildIntern() {
    inquirer.prompt(Questions.internQuestions)
        .then(function (data) {
            let tempObj = new Intern(data.intern, data.internID, data.internName, data.internEmail, data.internSchool);
            objToHTML.push(tempObj);
            buildStaff();
        })
}

function buildManager() {
    inquirer.prompt(Questions.managerQuestions)
        .then(function (data) {
            let tempObj = new Manager(data.manager, data.managerID, data.managerName, data.managerEmail, data.managerNumber);
            objToHTML.push(tempObj);
            buildStaff();
        })
}

function buildHTML() {
    let html = fs.readFileSync("./templates/index.html", "utf8");
    let $index = cheerio.load(html);
    $index("#addMember").html("");
    writefileAsync("./templates/index.html", $index.html())
        .then(function () {
            addEmployeeHTML();
        })
}


// Employee:
// * name
// * id
// * title
// inquirer.prompt([
//     {
//         type: "input",
//         name: "name",
//         message: "What is your name?"
//     },
//     {
//         type: "input",
//         name: "id",
//         message: "What is your ID number?"
//     },
//     {
//         type: "checkbox",
//         name: "title",
//         choices: [
//             "Manager",
//             "Engineer",
//             "Intern"
//         ]
//     },
//     {
//         type: "input",
//         name: "email",
//         message: "What is your email address?"
//     }

// ]).then(function (input) {
//     role = input.role;
//     name = input.name;
//     id = input.id;
//     email = email.id;

//     class Employee {
//         constructor(role, name, id, email) {
//             this.role = role;
//             this.name = name;
//             this.id = id;
//             this.email = email;
//         }

//         getData() {
//             console.log(this.role);
//             console.log(this.name);
//             console.log(this.id);
//             console.log(this.email);
//         };
//     }
//     module.exports = Employee;

    // if (this.title === "Manager") {
    //     enquirer.prompt([
    //         {
    //             type: "input",
    //             name: "officeNumber",
    //             message: "What is your office number?"
    //         },


    //     ]).then(function (input) {
    //         class Manager extends Employee {
    //             constructor(officeNumber) {
    //                 super(input.name, input.id, input.title, "Employee");
    //                 this.role = "Manager";
    //             };
    //         };
    //     });
    // };
    // if (this.title === "Engineer") {
    //     enquirer.prompt([
    //         {
    //             type: "input",
    //             name: "github",
    //             message: "What is your GitHub username?"
    //         },


    //     ]).then(function (input) {
    //         class Engineer extends Employee {
    //             constructor(github) {
    //                 super(input.name, input.id, input.title, "Employee");
    //                 this.role = "Engineer";
    //             };
    //         };
    //     });
    // };
    // if (this.title === "Intern") {
    //     enquirer.prompt([
    //         {
    //             type: "input",
    //             name: "school",
    //             message: "What is your school?"
    //         },


    //     ]).then(function (input) {
    //         class Manager extends Employee {
    //             constructor(officeNumber) {
    //                 super(input.name, input.id, input.title, "Employee");
    //                 this.role = "Intern";
    //             };
    //         };
    //     });
    // };
// });
// * getName()
// * getId()
// * getEmail()
// * getRole() (Returns 'Employee')

// Manager:
// * officeNumber
// * getRole() (Overridden to return 'Manager')



// Engineer:
// * github  (GitHub username)
// * getGithub()
// * getRole() (Overridden to return 'Engineer')

// Intern:
// * school 
// * getSchool()
// * getRole() (Overridden to return 'Intern')