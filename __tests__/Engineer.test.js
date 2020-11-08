const Engineer = require('../lib/Engineer.js')

test('import employee', ()=> {
let engineer = new Engineer('Dan','3245','dan@eng','githublove')
expect(engineer.name).toBe('Dan')
}
)

test('github is entered to engineer', () => {
let engineer = new Engineer('Dan','2345','d@a', 'gitdreams')
expect(engineer.github).toBe('gitdreams')
}
)