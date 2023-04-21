const fs = require("fs");
const inquirer = require("inquirer");

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
        message: 'Please provide a usage description to your project?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license did you use for this project?',
        choices: ["MIT", "Apache", "GPL", "BSD", "GNU"],
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
    },
  ])

  .then((response) => {
    fs.writeFile("./assets/README.md",

    `
    ![${response.license}](https://img.shields.io/badge/license-${response.license}-green)

    # Title

    ${response.title}

    ## Description

    ${response.description}

    ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)
    
    ## Installation 

    ${response.installation}

    ## Usage

    ${response.usage}

    ## License

    ${response.license}

    ## Contributing

    [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)

    ${response.contribution}

    ## Tests

    ${response.test}

    ## Questions

    Please view my projects at:
    GitHub: https://github.com/${response.github}

    If there are any questions, please contact me at:
    Email: ${response.email}
    `,
    (err) => (err ? console.log(err) : console.log("Success!"))
);
});

