const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user

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
            message: "Got it.  Almost to the meat of your readMe.  What's your GitHub username?",
            name: "promptUserGithub"
        },
        {
            type: "input",
            message: "Thanks!  And finally, what's the repo name in which this is housed?  This will help users collaborate with you on future enhancements.",
            name: "promptUserRepo"
        },
        {
            type: "input",
            message: "Okay!  Now on to the readMe.  First, what would you like to name your file?  You can leave off the file extension, I'll take care of that part.",
            name: "promptFileName"
        },
        // {
        //     type: "editor",
        //     message: "Tell me a little bit about your project.  I'd love to know the what, how, and why behind it.  Just type into the text editor that pops up so you can apply line and paragraph breaks if needed.  Include any markdown you would like, this generator's lowest heading currently is h3 or '###'",
        //     name: "promptFileDescription"
        // },
        // {
        //     type: "editor",
        //     message: "Great, thanks!  Next we need some installation instructions.  Provide me a step-by-step on how to get your application running.  This will also generate a text editor for you to use.",
        //     name: "promptFileInstallation"
        // },
        // {
        //     type: "editor",
        //     message: "Sounds good, let's keep going.  How is your application going to be used?  Please map out a step-by-step walkthrough for your users.  This will also load in notepad for your convenience.",
        //     name: "promptFileUsage"
        // },
        {
            type: "list",
            message: "Great stuff!  let's make it official and apply the appropriate licensing to this project",
            name: "promptFileUserLicense",
            choices: ["Apache License 2.0", "GNU General Public License v3.0", "MIT License", "BSD 2-Clause License", "BSD 3-Clause License", "Boost Software License 1.0", "Creative Commons Zero v1.0 Universal", "Eclipse Public License 2.0", "GNU Affero General Public License v3.0", "GNU General Public License v2.0", "GNU Lesser Public License v2.1", "Mozilla Public License 2.0", "The Unlicense"]
        },
    ])

    .then((answers) => {
        let licenseURL = ""

    if (answers.promptFileUserLicense === "Apache License 2.0") {
        licenseURL = "https://www.apache.org/licenses/LICENSE-2.0";

    } else if (answers.promptFileUserLicense === "GNU General Public License v3.0") {
        const licenseURL = "https://www.gnu.org/licenses/gpl-3.0.en.html";

    } else if (answers.promptFileUserLicense === "MIT License") {
        const licenseURL = "https://opensource.org/licenses/MIT";

    } else if (answers.promptFileUserLicense === "BSD 2-Clause License") {
        const licenseURL = "https://opensource.org/licenses/BSD-2-Clause";

    } else if (answers.promptFileUserLicense === "BSD 3-Clause License") {
        const licenseURL = "https://opensource.org/licenses/BSD-3-Clause";

    } else if (answers.promptFileUserLicense === "Boost Software License 1.0") {
        const licenseURL = "https://www.boost.org/LICENSE_1_0.txt";

    } else if (answers.promptFileUserLicense === "Creative Commons Zero v1.0 Universal") {
        const licenseURL = "https://creativecommons.org/publicdomain/zero/1.0/legalcode";

    } else if (answers.promptFileUserLicense === "Eclipse Public License 2.0") {
        const licenseURL = "https://www.eclipse.org/legal/epl-2.0/";

    } else if (answers.promptFileUserLicense === "GNU Affero General Public License v3.0") {
        const licenseURL = "https://www.gnu.org/licenses/agpl-3.0.en.html";

    } else if (answers.promptFileUserLicense === "GNU General Public License v2.0") {
        const licenseURL = "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html";

    } else if (answers.promptFileUserLicense === "GNU Lesser Public License v2.1") {
        const licenseURL = "https://www.gnu.org/licenses/old-licenses/lgpl-2.1.en.html";

    } else if (answers.promptFileUserLicense === "Mozilla Public License 2.0") {
        const licenseURL = "https://www.mozilla.org/en-US/MPL/2.0/";

    } else {
        const licenseURL = "https://unlicense.org/";
    };

    console.log(`*${answers.promptFileUserLicense}*`);
    console.log("license url- " + licenseURL);

    console.log(licenseURL + "licenseURL outside of the formula");
    const myReadMe = 
    
`# ${answers.promptFileName}
    
## Table Of Contents
1.  [Description](#description)
2.  [Installation](#installation) 
3.  [Usage](#usage)
4.  [Collaborating](#collaborating)
5.  [Contact](#contact)
    
_________________________________

### Description
    
${answers.promptFileDescription}
    
_________________________________

### Instructions

${answers.promptFileInstallation}

_________________________________

### Usage

${answers.promptFileUsage}

_________________________________

### Collaborating

Got an idea?  A bug to report?  Or even a thought on how the application could run more efficiently?  Log it [here](https://github.com/${answers.promptUserGithub}/${answers.promptUserRepo}/issues) as an issue, and we'll talk about it!

_________________________________

### Contact Me

#### ${answers.promptUserName}
- [E-mail](mailto:${answers.promptUserEmail})
- [Github](${answers.promptUserGithub})

_________________________________

### License

This application is [licensed](${licenseURL}) under the ${answers.promptFileUserLicense}
`;

    fs.writeFile(`${answers.promptFileName}-readMe.md`, myReadMe, () => {
        console.log("done!");
    })

});

 