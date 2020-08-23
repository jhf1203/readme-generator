const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
function askQuestions() {
    return inquirer.prompt([
        {
            type: "input",
            message: "Welcome to this readMe generator!  My name is Jim Faulkner, what's yours?",
            name: "promptUserName"
        },
        {
            type: "input",
            message: "Nice to meet you!  What's your preferred contact e-mail address?",
            name: "promptUserEmail"
        },
        {
            type: "input",
            message: "Got it.  Last question before we talk about your application.  What's your GitHub username?",
            name: "promptUserGithub"
        },
        {
            type: "input",
            message: "Okay!  Now on to the readMe.  First, what would you like to name your file?  You can leave off the extension, I'll take care of that part.",
            name: "promptFileName"
        },
        {
            type: "input",
            message: "Tell me a little bit about your project.  I'd love to know the what, how, and why behind it.",
            name: "promptFileDescription"
        },
        // {
        //     type: "editor",
        //     message: "Great, thanks!  Next we need some installation instructions.  Provide me a step-by-step on how to get your application running.",
        //     name: "promptFileInstallation"
        // },
        // {
        //     type: "editor",
        //     message: "Sounds good, let's keep going.  How is your application going to be used?  Please map out a step-by-step walkthrough for your users.",
        //     name: "promptFileUsage"
        // },
        {
            type: "list",
            message: "Great stuff!  Let's make it official and apply the appropriate licensing to this project",
            name: "fileUserLicense",
            choices: ["Apache License 2.0", "GNU General Public License v3.0", "MIT License", "BSD 2-Clause License", "BSD 3-Clause License", "Boost Software License 1.0", "Creative Commons Zero v1.0 Universal", "Eclipse Public License 2.0", "GNU Affero General Public License v3.0", "GNU General Public License v2.0", "GNU Lesser Public License v2.1", "Mozilla Public License 2.0", "The Unlicense"]
        },
    ])
} 


// function to write README file
function generateReadMe() {

    const myReadMe = `###${answers.promptFileName}
    
    ##Table Of Contents
    1.  Application Description
    2.  Installation instructions
    3.  Program Usage
    
    _________________________________

    #Application Description
    
    ${answers.promptFileDescription}
    
    _________________________________

    #Installation instructions

    ${answers.promptFileInstallation}

    _________________________________

    #Program Usage

    ${answers.promptFileUsage}

    _________________________________

    #Contact the Author
    ${answers.promptUserName}
    ${answers.promptUserEmail}
    ${answers.promptUserGithub}
    `;

    console.log(myReadMe);
    
}


// function to initialize program
function init() {
    askQuestions();
    generateReadMe(answers);
}
        

// function call to initialize program
init();
 