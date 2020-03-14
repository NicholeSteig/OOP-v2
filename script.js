var inquirer = require("inquirer");
var fs = require('fs');
var Manager = require("./manager.html");
var Employee = require("./e")

// Employee:
// * name
// * id
// * title
inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "What is your name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is your ID number?"
    },
    {
        type: "checkbox",
        name: "title",
        choices: [
            "Manager",
            "Engineer",
            "Intern"
        ]
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    }

]).then(function (input) {
    role = input.role;
    name = input.name;
    id = input.id;
    email = email.id;

    class Employee {
        constructor(role, name, id, email) {
            this.role = role;
            this.name = name;
            this.id = id;
            this.email = email;
        }

        getData() {
            console.log(this.role);
            console.log(this.name);
            console.log(this.id);
            console.log(this.email);
        };
    }
    module.exports = Employee;

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
});
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