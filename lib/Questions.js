const questions = module.exports = {

    positionQuestion: {
        type: "list",
        name: "position",
        message: "What is the team member's position?",
        choices: [
            "Manager",
            "Engineer",
            "Intern"
        ]
    },

    managerQuestions: [
        {
            type: "input",
            name: "managerName",
            message: "What is the team member's name?"
        },
        {
            type: "input",
            name: "managerID",
            message: "What is the team member's ID?"
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is the team member's email address?"
        },
        {
            type: "input",
            name: "managerNumber",
            message: "What is the team member's office number?"
        }
    ],

    engineerQuestions: [
        {
            type: "input",
            name: "engineerName",
            message: "What is the team member's name?"
        },
        {
            type: "input",
            name: "engineerID",
            message: "What is the team member's ID?"
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What is the team member's email address?"
        },
        {
            type: "input",
            name: "engineerGitHub",
            message: "What is the team member's GitHub Username?"
        }
    ],
    internQuestions: [
        {
            type: "input",
            name: "internName",
            message: "What is the team member's name?"
        },
        {
            type: "input",
            name: "internID",
            message: "What is the team member's ID?"
        },
        {
            type: "input",
            name: "internEmail",
            message: "What is the team member's email address?"
        },
        {
            type: "input",
            name: "internSchool",
            message: "What is the team member's School?"
        }
    ]
};