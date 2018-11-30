import {add} from './index'

test('testinf off add', ()=>{
    const tvit = add(2,3)
    console.log(`function should equelas to 5, equals to ${tvit}`)
    expect(tvit).toBe(5)
})


test('second testinf off add', ()=>{
    const tvit = add(-5,3)
    console.log(`function should be less than 0, exquals to ${tvit}`)
    expect(tvit).toBeLessThan(0)
})