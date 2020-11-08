const Engineer = require('./lib/Engineer.js')
const Manager = require('./lib/Manager.js')
const Intern = require('./lib/Intern.js')
const inquirer = require('inquirer');
const fs = require('fs');

//const {writeFile} = require('./src/create-info');//MANDITORY to link file
//NOTES
// npm init to create package.json
//to add .gitignore - conand line: touch .gitignore
// npm install inquirer to get the node_modules and package-lock.son (see 9.3.4 for details)
//npm run test to run test - note make have to reinstal jest while in this file. 
//must control C everytime to stop the jest command (or most other comands that wont stop)
//now unit testing in relation to mocks for interview questions
//!! be carefun with create arrow methods in your object becasue it will mess up "this."
//oop is nice because it keeps objects from messing with other code
//if you want to add new properties to a class ex new catagory or functions constructor- use prototype.(new factor)
// prototypes add methors to existing constructors (think engeratance)
//toBe is a specific value, expect."" is of a type
//for challenge - inquier, unit 6, jest testing

// generatePage()
// generateAllEmployees()
// generateEmployee()
// processEmployees()
// collectDataPrimary()

const makeEmployee = function() {
//ask for employee job
    inquirer
        .prompt({
            type: 'checkbox',
            name: 'role',
            choices: ['Manager', 'Intern', 'Engineer'],
            validate: descriptionInput => {
                if (descriptionInput) {
                  return true;
                } else {
                  console.log('Please enter role');
                  return false;
                }
              }

        })
        //destructure name for responseto insert into code
        //NOTE!!! below I have to use => because .then(function({name}) would create a new scope so the current enemy consol log wont work
        .then(({role}) => {
            if (role === 'Manager') {
                   console.log('selected manager')        
            }
            else if (role === 'Intern'){
                console.log('selected intern')
            }
            else {
                console.log('selected engineer')
            }
        })
        //test object creation      

}



// const Engineer = () => {
//     console.log(
//     "==========prompt employee information=========="
//     )
//     return inquirer.prompt([
//       {
//         type: 'input',
//         name: 'name',
//         message: 'What is the employee name?',
//         validate: descriptionInput => {
//             if (descriptionInput) {
//               return true;
//             } else {
//               console.log('Please enter name');
//               return false;
//             }
//           }
//       },
//       {
//         type: 'input',
//         name: 'id',
//         message: 'What is the employee ID?',
//         validate: descriptionInput => {
//             if (descriptionInput) {
//               return true;
//             } else {
//               console.log('Please enter id');
//               return false;
//             }
//           }
//       },
//       {
//         type: 'input',
//         name: 'email',
//         message: 'What is the employee email?',
//         validate: descriptionInput => {
//             if (descriptionInput) {
//               return true;
//             } else {
//               console.log('Please enter email');
//               return false;
//             }
//           }
//       }
//   };



makeEmployee()
//   .then((data) => {
//     writeFile(data)})