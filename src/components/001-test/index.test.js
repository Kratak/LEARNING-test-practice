import {total} from './index'
import {add} from './add'

jest.mock('./add', ()=>({
    add: jest.fn(()=>25)
}) )


test('integration add & total', ()=>{
    expect(total(5,20)).toBe("25zł")
    expect(add).toHaveBeenCalledTimes(1)

    add.mockImplementation(()=>30)
    
    expect(total(5,25)).toBe("30zł")
    expect(add).toHaveBeenCalledTimes(2)
})