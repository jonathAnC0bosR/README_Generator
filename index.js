const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the project title?',
            name: 'projectName',
        },
        {
            type: 'input',
            message: 'Enter the description of the project:',
            name: 'projectDescription'
        },
        {
            type: 'input',
            message: 'Enter the installation instructions: ',
            name: 'installationInfo',
        },
        {
            type: 'input',
            message: 'Enter the usage information: ',
            name: 'usageInfo',
        },
        {
            type: 'list',
            message: 'Select a Licence',
            choices: ['MIT', 'Apache', 'GPLv2', 'GPLv3', 'BSD 3-clause', 'Unlicenced'],
            name: 'licence',
        },
        {
            type: 'input',
            message: 'Enter contributing information: ',
            name: 'contributinInfo',
        },
        {
            type: 'input',
            message: 'Enter the test information: ',
            name: 'testInfo',
        },
        {
            type: 'input',
            message: 'Enter the questions content',
            name: 'questions',
        },
    ])
