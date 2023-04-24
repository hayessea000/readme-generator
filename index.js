// TODO: Include packages needed for this application
const inquirer = require('inquirer');

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
      type: 'input',
    //   makes so can be more
      message: 'Who Contributed to your project?',
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt(questions)
  .then((response) =>
    response.confirm === response.password
      ? console.log('Success!')
      : console.log('You forgot your password already?!')
  );
}

// Function call to initialize app
init();
