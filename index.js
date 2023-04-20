// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [];

inquirer
  .prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions for your project?',
      },
    {
        type: 'input',
        name: 'usage',
        message: 'What are the usage infroamtion for your project?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license did you use for this project?',
        choices: ["MIT", "Apache", "GPL"],
    },
    {
        type: 'list',
        name: 'badge',
        message: 'Please choose the corresponding badge for your license',
        choices: []
    },

    {
        type: 'input',
        name: 'contribution',
        message: 'What are the contribution guidelines for your project?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'What are the test instructions for your project?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },     
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },                   
  ])
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
