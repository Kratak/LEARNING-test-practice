import React from 'react'
import {render, cleanup, fireEvent} from 'react-testing-library'
import LogForm from './logform'

afterEach(cleanup)

const onSubmit = jest.fn()

test('Form testing',()=>{
    const { getByText, queryByTestId } = render(<LogForm submitForm={onSubmit} />)  
    expect(queryByTestId('log-form')).toBeTruthy()
    fireEvent.click(getByText('Submit'))
    
    expect(onSubmit).toHaveBeenCalledTimes(1)
});

