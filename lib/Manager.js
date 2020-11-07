
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
      // call parent constructor here:
        super(name, id, email);
        this.officeNumber = officeNumber
    }
    Manager = Object.create(Employee);

    getOfficeNumber(){
        if (Number.NaN(this.officeNumber)){
            return "Please put in a number"
        }
        else {
            return this.officeNumber
        }
    }
    getRole() {
        return 'Manager'  
    } 
}        


module.exports = Manager