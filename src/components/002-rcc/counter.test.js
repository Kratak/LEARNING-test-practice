import React from 'react'
import {render, cleanup, fireEvent} from 'react-testing-library'
import Counter from './counter'

afterEach(cleanup)

test('<Counter />', ()=>{
    //destructuring
    const {debug , getByTestId, getByText} = render(<Counter />)
    //debug and previue of html  and tags
    //assert button ia a button
    const buttonCounter =getByTestId('test002')
    const styledTestDiv =getByTestId('test001')
    expect(buttonCounter.tagName).toBe('BUTTON')
    // assert  div is a div
    expect(styledTestDiv.tagName).toBe('DIV')
    // assert div have a text "text"
    expect(styledTestDiv.textContent).toBe('text')
    // assert count function on button
    fireEvent.click(buttonCounter)
    expect(buttonCounter.textContent).toBe('1')
    fireEvent.click(buttonCounter)
    expect(buttonCounter.textContent).toBe('2')
    //clearing 4-line consol log
    // console.log(` 
     
     
    //   `)
})
