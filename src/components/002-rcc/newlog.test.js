import React from 'react'
import {render, cleanup, fireEvent} from 'react-testing-library'
import NewLog from './newlog'

afterEach(cleanup)

test('NewLog testing',()=>{
    const {
        debug , 
        getByTestId, 
        getByText, 
        queryByTestId,
        container} = 
    render(<NewLog />)

    expect(getByTestId('page-title').textContent).toBe('New log')
    expect(queryByTestId('log-form')).toBeTruthy()
    
    expect(container.firstChild).toMatchSnapshot()
})