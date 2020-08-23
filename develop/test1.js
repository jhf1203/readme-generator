var inquirer = require("inquirer");

function askInputs() {
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

}

function askConfirms() { 
    inquirer.prompt([
        {
        type:"confirm",
        message: "Is this a confirm question?",
        name: "contributorAnswer"
        }
    ])
}

askInputs()
    .then(askConfirms)
.then((answer) => {
    console.log(answer);
        if (answer === true) {
            console.log("true");
        } else {
            console.log("false");
    }
})
