const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");
// array of questions for user

const userQuestions = [
    {
        type: "input",
        name: "title",
        message: "What is your project title?"
    },
    {
        type: "input",
        name: "description",
        message: "Give a description of the project."
    },
    {
        type: "input",
        name: "installation",
        message: "Describe the installation process for this project."
    },
    {
        type: "input",
        name: "usage",
        message: "How do you use the project?"
    },
    {
        type: "list",
        name: "license",
        message: "Choose the licensing you would like to use for your application.",
        choices: [
            "MIT",
            "Mozilla Public License 2.0",
            "Apache License 2.0",
            "The Unlicense"
        ]
    },
    {
        type: "input",
        name: "contributing",
        message: "Would you like other users to contribute?  If so, explain how."
    },
    {
        type: "input",
        name: "tests",
        message: "Provide tests for users here, to demo the project and its use."
    },
    {
        type: "input",
        name: "github",
        message: "What is your github username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your e-mail??"
    },
]
//Function that writes the readme file.
inquirer.prompt(userQuestions)
    .then(function (data) {

        var filename = data.title.toLowerCase().split(' ').join('') + ".md";

        fs.writeFile(filename, generateMarkdown(data), function (err) {

            if (err) {
                return console.log(err);
            }

            console.log("Read me generator successfull!");

            console.log("README file is called: " + filename);

        });
    });;




