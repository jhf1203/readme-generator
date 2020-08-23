const inquirer = require("inquirer");
const fs = require("fs");



    return inquirer.prompt([
        {
        type:"input",
        message:"test",
        name:"testAnswer1"
        },
        {
        type:"input",
        message:"testing",
        name:"testAnswer2"
        }
    ])

    .then(function (whatever) {

    const text = `
    Test ReadMe lives here!

    ${whatever.testAnswer1}

    =========

    some text!  And then ${whatever.testAnswer2}
    
    `;
    fs.writeFile("testxt.txt", text, () => {
        console.log("written!");
    });
    })


    


    





