
import App from './App'


test('one',() =>{
  expect(true).toBeTruthy()

} )


const finger = '5';

test('finger test', ()=>{
  const e = finger;
  expect(e).toEqual('5')
})