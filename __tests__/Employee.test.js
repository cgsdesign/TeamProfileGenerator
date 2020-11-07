const Employee = require('../lib/Employee.js')//import employee
//const { TestScheduler } = require('jest')

//jest.mock('../lib/Employee');//once made overwrites with fake data. if this function works, the tests wont fail just for testing

test('create an employee object', () =>{
    const employee = new Employee ('Dan','1192', "cat@email",'Manager',657465465)
    expect(employee.name).toBe('Dan')
    expect(employee.id).toBeDefined()
    expect(employee.email).toBeDefined()
    expect(employee.role).toBeDefined()
    })
















//     //concatination by default
//   test('gets a description of the enemy', () => {
//     const enemy = new Enemy('goblin', 'sword');
  
//     expect(enemy.getDescription()).toEqual(expect.stringContaining('goblin'));
//     expect(enemy.getDescription()).toEqual(expect.stringContaining('sword'));
//   });