// Needed packages
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// List of licences which are choosable in the prompt
const licenceList = [
    'None',
    'Apache License 2.0',
    'GNU General Public License v3.0',
    'MIT License',
    'BSD 2-Clause "Simplified" License',
    'BSD 3-Clause "New" or "Revised" License',
    'Boost Software License 1.0',
    'Creative Commons Zero v1.0 Universal',
    'Eclipse Public License 2.0',
    'GNU Affero General Public License v3.0',
    'GNU General Public License v2.0',
    'GNU Lesser General Public License v2.1',
    'Mozilla Public License 2.0',
    'The Unlicense',
]

// The questions which the cli will be asking the user
const questions = [
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is your project description?',
        name: 'desc',
    },
    {
        type: 'input',
        message: 'What are the installation instructions for this project?',
        name: 'instinstruct',
    },
    {
        type: 'input',
        message: 'How do you use this project?',
        name: 'use',
    },
    {
        type: 'input',
        message: 'Who contributed to this project?',
        name: 'contrib',
    },
    {
        type: 'input',
        message: 'What are the test instructions?',
        name: 'testing',
    },
    {
        type: 'list',
        message: 'What licence does your projet use?',
        name: 'license',
        choices: licenceList,
    },
    {
        type: 'input',
        message: 'What is your github username?',
        name: 'gitname',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    },
];

// This gets the text for the readme and writes it to the README.md file
function writeToFile(data) {
    let finalData = generateMarkdown(data);

    fs.writeFile("README.md", finalData, (err) =>
        err ? console.log(err) : console.log('Success!')
    )
}

// This starts the initial prompts to make the readme
function init() {
    inquirer
        .prompt(questions)
        .then(writeToFile);
}

// Function call to initialize app
init();
