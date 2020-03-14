const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Questions = require("./lib/Questions")
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const cheerio = require("cheerio");

let writefileAsync = util.promisify(fs.writeFile);
let readFileAsync = util.promisify(fs.readFile);
let objToHTML = [];

let i = 0;

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

function addOrNot() {
    inquirer.prompt(Questions.addAnother)
    .then(function (ans) {
        switch(ans.another) {
            case "Yes":
                staffQuestion();
                break;

                case "No":
                    buildHTML();
                    break;
        }
    })
}

function buildEngineer() {
    inquirer.prompt(Questions.engineerQuestions)
        .then(function (data) {
            let tempObj = new Engineer(data.engineer, data.engineerID, data.engineerName, data.engineerEmail, data.engineerGitHub);
            objToHTML.push(tempObj);
            console.log("Engineer added");
            addOrNot();
        })
}

function buildIntern() {
    inquirer.prompt(Questions.internQuestions)
        .then(function (data) {
            let tempObj = new Intern(data.intern, data.internID, data.internName, data.internEmail, data.internSchool);
            objToHTML.push(tempObj);
            console.log("Intern added");
            addOrNot();
        })
}

function buildManager() {
    inquirer.prompt(Questions.managerQuestions)
        .then(function (data) {
            let tempObj = new Manager(data.manager, data.managerID, data.managerName, data.managerEmail, data.managerNumber);
            objToHTML.push(tempObj);
            console.log("Manager added");
            addOrNot();
        })
}

function buildHTML() {
    let html = fs.readFileSync("./templates/index.html", "utf8");
    let $index = cheerio.load(html);
    $index("#addEmployee").html("");
    writefileAsync("./templates/index.html", $index.html())
        .then(function () {
            addEmployeeHTML();
        })
}

function addManager(employee) {
    let html = fs.readFileSync("./templates/manager.html", "utf8");
    let $manager = cheerio.load(html);
    readFileAsync("./templates/index.html", "utf8")
        .then(function (data) {
            let $index = cheerio.load(data);
            $manager("#name").html(employee.getName());
            $manager("#id").html(employee.getID());
            $manager("#email").html(employee.getEmail());
            $manager("#number").html(employee.getNumber());
            $index("#addEmployee").append($manager.html());
            writefileAsync("./templates/index.html", $index.html())
                .then(function () {
                    console.log("Manager added");
                    addEmployeeHTML();
                }, function (error) {
                    console.log(error);
                });
        });
}

staffQuestion

function addIntern(employee) {
    let html = fs.readFileSync("./templates/intern.html", "utf8");
    let $intern = cheerio.load(html);
    readFileAsync("./templates/index.html", "utf8")
        .then(function (data) {
            let $index = cheerio.load(data);
            $intern("#name").html(employee.getName());
            $intern("#id").html(employee.getID());
            $intern("#email").html(employee.getEmail());
            $intern("#school").html(employee.getSchool());
            $index("#addEmployee").append($intern.html());
            writefileAsync("./templates/index.html", $index.html())
                .then(function () {
                    console.log("Intern added");
                    addEmployeeHTML();
                }, function (error) {
                    console.log(error);
                });
        });
}

function addEngineer(employee) {
    let html = fs.readFileSync("./templates/engineer.html", "utf8");
    let $engineer = cheerio.load(html);
    readFileAsync("./templates/index.html", "utf8")
        .then(function (data) {
            let $index = cheerio.load(data);
            $engineer("#name").html(employee.getName());
            $engineer("#id").html(employee.getID());
            $engineer("#email").html(employee.getEmail());
            $engineer("#school").html(employee.getSchool());
            $index("#addEmployee").append($engineer.html());
            writefileAsync("./templates/index.html", $index.html())
                .then(function () {
                    console.log("Engineer added");
                    addEmployeeHTML();
                }, function (error) {
                    console.log(error);
                });
        });
}

function addEmployeeHTML() {
    if (i < objToHTML.length) {
        employee = objToHTML[i++];
        if (employee.getRole() === "Manager") addManager(employee);
        else if (employee.getRole() === "Engineer") addEngineer(employee);
        else if (employee.getRole() === "Intern") addIntern(employee);
    } else {
        let html = fs.readFileSync("./templates/index.html", "utf8");
        writefileAsync(`./team.html`, html)
            .then(function () {
                readFileAsync("./templates/index.html", "utf8")
                    .then(async function (html) {
                        let $index = cheerio.load(html);
                        $index("#addEmployee").html("");
                        writefileAsync("./templates/index.html", $index.html())
                    });
            }, function (err) {
                if (err) throw err;
            });
    }
}

init();

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