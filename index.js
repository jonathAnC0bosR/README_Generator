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
            name: 'contributingInfo',
        },
        {
            type: 'input',
            message: 'Enter the test instructions: ',
            name: 'testInfo',
        },
        {
            type: 'input',
            message: 'Enter your github username: ',
            name: 'username',
        },
        {
            type: 'input', 
            message: 'Enter your email: ',
            name: 'email',
        },
    ]).then((userInput) => {
        const answers = writeReadme(userInput.projectName, userInput.projectDescription, userInput.installationInfo, userInput.usageInfo, userInput.licence, userInput.contributingInfo, userInput.testInfo, userInput.username, userInput.email);
        fs.writeFile('sample-README.md', answers, (err) => {
            err ? console.log(err) : console.log('\n\n README generated succesfully');
        })
    })

const writeReadme = (projectName, projectDescription, installationInfo, usageInfo, licence = null, contributingInfo, testInfo, username, email) => 
`# ${projectName}

## Table of contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Licence](#licence)
- [Contributing](#contributing)
- [Test](#test)
- [Questions](#questions)

## Description

${projectDescription}.

## Installation

${installationInfo}.

## Usage 

${usageInfo}.

## Licence

This repository is licenced under the ${licence} licence.

## Contributing

${contributingInfo}

## Test Instructions

${testInfo}

## Questions

To check my repositories visit: https://github.com/${username}
You can contact me on ${email}.

`
;


