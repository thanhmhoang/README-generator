# README-Generator

## Description

For this Module 9 Challenge, the challege was to create a command-line application that dynamically generates a professional README.md file from a user's input using Inquirer package. The purpose of this application is for when creating open source projects on GitHub, it is important to have a high-quality README for the app. This README should include what the app is for, how to use the app, how to install it, how to report issues, and how to make contributions&mdash;this last part increases the likelihood that other developers will contribute to the success of the project. This will allow users to quickly generate a README file so that time and energy can be dedicated elsewhere on the project.

## User Story

```md
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```
## Installation

To use this application, please follow the link to the GitHub repository, https://github.com/thanhmhoang/README-generator. Once on the GitHub repo, click on the green "Code" button, then click "SSH" and copy the text in the box to be used as your SSH key. Next if you are on Windows, open your Git Bash, and your terminal if on Mac. Then proceed to where you would like this folder me location in your device and run the command 
The application will be invoked by using the following command:
```bash
git clone git@github.com:thanhmhoang/README-generator.git
```

## Usage

To use this application, once you have completed the installation instructions, open the folder in VS code. Then right click on the "index.js" file and click "Open in Integrated Terminal". Once you are in the terminal, run the following command in the command line.

```bash
node index.js
```
Users will be then prompted with a series of questions, once the user as completed all of the quesitons, a README.md file will populate in the "assets" folder. There users can make an edits or changes they would like.

<img src="./assets/README generator.gif">

## Credits

Thien Nguyen - Former UW Bootcamp student

## License

MIT 
