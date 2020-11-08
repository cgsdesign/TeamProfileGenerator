const Intern = require('../lib/Intern')
const { TestScheduler } = require('jest')

test('import employees to intern', () => {
    let intern = new Intern('Vie', '2456', 'v@hotmail', 'WashU')
    expect(intern.name).toBeDefined()
}
)

test('test for school', () => {
    let intern = new Intern('Koy', 'A4325', 'v@koy', 'MoonAcademy')
    expect(intern.school).toBeDefined()

})