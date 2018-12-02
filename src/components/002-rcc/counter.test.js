import React from 'react'
import {render, cleanup} from 'react-testing-library'
import Counter from './counter'

test('<Counter />', ()=>{
    //destructuring
    const {debug , getByTestId, getByText} = render(<Counter />)
    //debug and previue of html  and tags
    debug()
    //assert button ia a button
    expect(getByText('0').tagName).toBe('BUTTON')
    // assert  div is a div
    expect(getByTestId('test001').tagName).toBe('DIV')
    // assert div have a text "text"
    expect(getByTestId('test001').textContent).toBe('text')



    //clearing 4-line consol log
    console.log(` 
     
     
      `)
})
