const Employee = require('./Employee');

function init () {
    inquirer.prompt({})
        .then((response) => {
            //
        })
    // inquirer 
    //prompt 
        // manager info
    // employee func
}

async function addEmployee() {
    const response = await inquirer.prompt({
        //
    })

    if (response.type) {
        await addEngineerQuestions()
    }
}

async function addEngineerQuestions() {
    await inquirer.prompt({})
}

    // define addEmployee function() {
        // inquire.prompt 

            // type of employee

        // if statement (employee type) 
            // employee type questions

        // repeat with other types ...

        // none option when adding new employee to exit fuction and render html
    // }
