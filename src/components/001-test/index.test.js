import {add, total} from './index'

const trip = jest.fn(()=>5)

test('mock test', ()=>{
    expect(trip(0,5,5,5,9)).toBe(5)
    expect(trip).toHaveBeenCalledTimes(1)
    expect(trip).toHaveBeenCalledWith(0,5,5,5,9)
})

test('testinf off add', ()=>{
    const tvit = add(2,3)
    expect(tvit).toBe(5)
})


test('second testinf off add', ()=>{
    const tvit = add(-5,3)
    expect(tvit).toBeLessThan(0)
})

test('integration add & total', ()=>{
    expect(total(5,20)).toBe("25zł")
})