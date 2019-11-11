// Test away!
import React from 'react' 

import {render, fireEvent} from '@testing-library/react'
import Controls from './Controls'




test('It renders Controls', ()=>{
    expect(render(<Controls/>)).toMatchSnapshot()
})

test('it shows lock gate text', ()=>{
    const fakeLocked = false;
    const {getByText} = render(<Controls locked={fakeLocked}/>)
    expect(getByText('Lock Gate'))
})

test('it shows unlock gate text', ()=>{
    const fakeLocked = true;
    const {getByText} = render(<Controls locked={fakeLocked}/>)
    expect(getByText('Unlock Gate'))
})

test('it shows close gate text', ()=>{
    const fakeClosed = false;
    const {getByText} = render(<Controls closed={fakeClosed}/>)
    expect(getByText('Close Gate'))
})

test('it shows open gate text', ()=>{
    const fakeClosed = true;
    const {getByText} = render(<Controls closed={fakeClosed}/>)
    expect(getByText('Open Gate'))
})



test('it calls toggleClosedMock on Close Gate button click', () => {
    const toggleClosedMock = jest.fn();
    const fakeClosed = false
    const {getByText} = render(<Controls toggleClosed={toggleClosedMock} closed={fakeClosed}/>)
    // const closingButton = getByTestId("closing-button")

    fireEvent.click(getByText("Close Gate"))
    expect(toggleClosedMock).toHaveBeenCalled()

})

test('it calls toggleClosedMock on Open Gate button click', () => {
    const toggleClosedMock = jest.fn();
    const fakeClosed = true
    const {getByText} = render(<Controls toggleClosed={toggleClosedMock} closed={fakeClosed}/>)
    // const closingButton = getByTestId("closing-button")

    fireEvent.click(getByText("Open Gate"))

    expect(toggleClosedMock).toHaveBeenCalled()
})

test('it calls toggleLockedMock on button click', () => {
    const toggleLockedMock = jest.fn();
    const {getByText} = render(<Controls toggleLocked={toggleLockedMock} locked={false} disabled={false}/>)


    // const lockingButton = getByTestId("locking-button")

    // fireEvent.click(getByTestId("locking-button"))
    
    fireEvent.click(getByText("Lock Gate"))

    expect(toggleLockedMock).toHaveBeenCalledWith()

   

    // fireEvent.click(getByTestId("locking-button"))

    // expect(toggleLockedMock).toHaveBeenCalledWith()
})

//lockgate
// const closeGate = getByText('Close Gate')

// //lockgate then
// const openGate = getByText('Open Gate')
// const unlockGate = getByText('Unlock Gate')