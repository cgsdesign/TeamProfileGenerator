const Employee = require('../lib/Employee.js')//import employee
//const { TestScheduler } = require('jest')

//jest.mock('../lib/Employee');//once made overwrites with fake data. if this function works, the tests wont fail just for testing

test('create an employee object', () =>{
    const employee = new Employee ('Dan')
    expect(employee.name).toBe('Dan')
    expect(employee.id).toEqual(expect.any(Object))
    expect(employee.email).toEqual(expect.any(Object))
    expect(employee.roll).toEqual(expect.any(Object))
    })




















//     //concatination by default
//   test('gets a description of the enemy', () => {
//     const enemy = new Enemy('goblin', 'sword');
  
//     expect(enemy.getDescription()).toEqual(expect.stringContaining('goblin'));
//     expect(enemy.getDescription()).toEqual(expect.stringContaining('sword'));
//   });