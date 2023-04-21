// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Linking to where generated README will be saved
const generateREADME = require('./assets/generateMarkdown.js')

const questions = () => {
return inquirer
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
        message: 'Please provide a usage description to your project?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license did you use for this project?',
        choices: ["MIT", "Apache", "GPL"],
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What are the contribution guidelines for your project?',
    },
    {
        type: 'input',
        name: 'test', 
        message: 'What should users type in the command line to test your project?',
        default: 'npm test'
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
    }
]);
};

const writeFile = response =>
    fs.writeFile('generatedREADME.md', data, err => {
    })

questions()
.then(answers => {
    return generateREADME(response);
})
.then(data => {
    return writeFile(data);
})
.catch(err => {
    console.log(err)
})

