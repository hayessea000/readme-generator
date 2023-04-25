// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      message: 'What is title of your project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Describe your project?',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What do you need to install to use your project?',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'How do you use your project?',
      name: 'usage',
    },
    {
        type: 'list',
        message: 'What license do you need?',
        name: 'license',
        choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'None'],
    },
    {
      type: 'input',
      message: 'how would you like other to contribute to your project?',
      name: 'contributing',
    },
    {
      type: 'input',
      message: 'How do you run tests for your project?',
      name: 'tests',
    },
    {
      type: 'input',
      message: 'What is you GitHub username?',
      name: 'username',
    },
    {
      type: 'input',
      message: 'What is you Email?',
      name: 'email',
    },
];

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            const filename = `sampleREADME.md`;
            fs.writeFile(filename, generateMarkdown(data), (err) =>
              err ? console.log(err) : console.log('Success!')
            );
        });
}

// Function call to initialize app
init();
