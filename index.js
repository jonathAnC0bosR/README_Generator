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
            message: 'Enter the test information: ',
            name: 'testInfo',
        },
        {
            type: 'input',
            message: 'Enter the questions content: ',
            name: 'questions',
        },
    ]).then((userInput) => {
        const answers = writeReadme(userInput.projectName, userInput.projectDescription, userInput.installationInfo, userInput.usageInfo, userInput.licence, userInput.contributingInfo, userInput.testInfo, userInput.questions);
        fs.writeFile('README.md', answers, (err) => {
            err ? console.log(err) : console.log('README generated succesfully');
        })
    })

const writeReadme = (projectName, projectDescription, installationInfo, usageInfo, licence, contributingInfo, testInfo, questions) => 
`# ${projectName}

## Table of contents

-[Description](<a>Description</a>)
-[Description][]
-[][]

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

## Test 

${testInfo}

## Questions

${questions}
`
;


