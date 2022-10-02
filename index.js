const fs = require("fs");
const inquirer  = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown.js')

// prompt for questions
inquirer.prompt([
    {
        type:   'input',
        name:   'title', 
        message:    'What is the name of your project?'
    },
    {
        type:   'input',
        name:   'description', 
        message:    'please provide a description of your project'
    },
    {
        type:   'input',
        name:   'installation', 
        message:    'please provide a installation instructions'
    },
    {
        type:   'input',
        name:   'usage', 
        message:    'How do u plan to use your project?'
    },
    {
        type:   'input',
        name:   'contribution', 
        message:    'please provide contribution guidelines'
    },
    {
        type:   'input',
        name:   'test', 
        message:    'please provide test instructions'
    },
    {
        type:   'list',
        name:   'license', 
        message:    'which License would you like to use?',
        choices:    ['Apache', 'MIT', 'Mozilla-Public', 'GNU-General-Public', 'None']
    },
    {
        type:   'input',
        name:   'github', 
        message:    'please enter your github username'
    },
    {
        type:   'input',
        name:   'email', 
        message:    'please enter your email'
    },
]).then((answers) => fs.writeFileSync('./utils/generatedREADME.md', generateMarkdown(answers)))
    .then(() => console.log('README file was created!'))
    .catch((e) => console.log(err));