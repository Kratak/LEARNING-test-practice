import {add} from './add'

test('testinf off add', ()=>{
    const tvit = add(2,3)
    expect(tvit).toBe(5)
})


test('second testinf off add', ()=>{
    const tvit = add(-5,3)
    expect(tvit).toBeLessThan(0)
})