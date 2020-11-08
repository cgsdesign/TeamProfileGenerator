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
const finishToPage = function(){
    inquirer
    .prompt({
        type: 'confirm',
        name: 'newEp',
        message: 'Do you want to add another employee? y/N',
        default: true

    })
    .then(({newEp}) => {
        if (newEp == true) {
            console.log( 'answered true')
            makeEmployee()
            return
        }
        else{
            console.log ("page is generating")
            return
        }
    })

}

const makeManager = function() {

    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the manager name?',
        validate: descriptionInput => {
            if (descriptionInput) {
              return true;
            } else {
              console.log('Please enter name');
              return false;
            }
          }
      },
      {
        type: 'input',
        name: 'id',
        message: 'What is the employee ID?',
        validate: descriptionInput => {
            if (descriptionInput) {
              return true;
            } else {
              console.log('Please enter id');
              return false;
            }
          }
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is the employee email?',
        validate: descriptionInput => {
            if (descriptionInput) {
              return true;
            } else {
              console.log('Please enter email');
              return false;
            }
          }
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the manager office number?',
        validate: descriptionInput => {
            if (descriptionInput) {
              return true;
            } else {
              console.log('Please enter office number');
              return false;
            }
          }
      }
    ])
    .then(({name,id,email,officeNumber}) => {
        this.manager = new Engineer(name,id,email,officeNumber)
        console.log(this.manager)
        //push
        //prompt want to make another employee?
        finishToPage()
    }) 
  };




//make intern
const makeIntern = function() {

    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the intern name?',
        validate: descriptionInput => {
            if (descriptionInput) {
              return true;
            } else {
              console.log('Please enter name');
              return false;
            }
          }
      },
      {
        type: 'input',
        name: 'id',
        message: 'What is the employee ID?',
        validate: descriptionInput => {
            if (descriptionInput) {
              return true;
            } else {
              console.log('Please enter id');
              return false;
            }
          }
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is the employee email?',
        validate: descriptionInput => {
            if (descriptionInput) {
              return true;
            } else {
              console.log('Please enter email');
              return false;
            }
          }
      },
      {
        type: 'input',
        name: 'school',
        message: 'What is the employee school?',
        validate: descriptionInput => {
            if (descriptionInput) {
              return true;
            } else {
              console.log('Please enter school name');
              return false;
            }
          }
      }
    ])
    .then(({name,id,email,school}) => {
        this.intern = new Intern(name,id,email,school)
        console.log(this.school)
        //push
        //prompt want to make another employee?
        finishToPage()
    }) 
  };

//make engineer
const makeEngineer = function() {

    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the employee name?',
        validate: descriptionInput => {
            if (descriptionInput) {
              return true;
            } else {
              console.log('Please enter name');
              return false;
            }
          }
      },
      {
        type: 'input',
        name: 'id',
        message: 'What is the employee ID?',
        validate: descriptionInput => {
            if (descriptionInput) {
              return true;
            } else {
              console.log('Please enter id');
              return false;
            }
          }
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is the employee email?',
        validate: descriptionInput => {
            if (descriptionInput) {
              return true;
            } else {
              console.log('Please enter email');
              return false;
            }
          }
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is the employee github?',
        validate: descriptionInput => {
            if (descriptionInput) {
              return true;
            } else {
              console.log('Please enter github');
              return false;
            }
          }
      }
    ])
    .then(({name,id,email,github}) => {
        this.engineer = new Engineer(name,id,email,github)
        console.log(this.engineer)
        //push - to be built
        //prompt want to make anothr employee?
        finishToPage()
    }) 
  };

  const makeEmployee = function() {
    //ask for employee job
        inquirer
            .prompt({
                type: 'checkbox',
                name: 'role',
                message: 'What is the employee role?',
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
            //NOTE!!! below I have to use => because .then(function({name}) would create a new scope so the current enemy consol log wont work
            .then(({role}) => {
                if (role === 'Manager') {
                       console.log('you selected manager')   
                       makeManager()     
                }
                else if (role === 'Intern'){
                    console.log('you selected intern')
                    makeIntern()
                }
                else {
                    console.log('you selected engineer')
                    makeEngineer()
                }
            })
            //test object creation      
    
    }

makeEmployee()
//   .then((data) => {
//     writeFile(data)})