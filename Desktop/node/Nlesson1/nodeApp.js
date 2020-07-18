var inquirer = require('inquirer');
inquirer
  .prompt([
    /* Pass your questions in here */
    {
    type: 'input',
    message: 'what is your trainer name?',
    name: 'trainer'
},
{
    type: 'password',
    message: 'password',
    name: 'trainerPassword'
}

  ])
  .then(answers => {
    // Use user feedback for... whatever!!
  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });