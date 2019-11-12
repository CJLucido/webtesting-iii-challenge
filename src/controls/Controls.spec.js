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


    fireEvent.click(getByText("Open Gate"))

    expect(toggleClosedMock).toHaveBeenCalled()
})

test('it calls toggleLockedMock on Lock Gate button click', () => {
    const toggleLockedMock = jest.fn();
    const {getByTestId} = render(<Controls toggleLocked={toggleLockedMock} locked={false} closed={true}/>)
    
    fireEvent.click(getByTestId("locking-button"))

    expect(toggleLockedMock).toHaveBeenCalled()

})

test('it calls toggleLockedMock on Unlock Gate button click', () => {
    const toggleLockedMock = jest.fn();
    const {getByText} = render(<Controls toggleLocked={toggleLockedMock} locked={true} closed={true}/>)
    
    fireEvent.click(getByText("Unlock Gate"))

    expect(toggleLockedMock).toHaveBeenCalled()

})

test('it checks the closed toggle button for disabled if the gate is locked', ()=>{
    const toggleClosedMock = jest.fn();
    const {getByTestId} = render(<Controls toggleClosed={toggleClosedMock} locked={true} />)

    fireEvent.click(getByTestId("closing-button"))

    expect(toggleClosedMock).not.toHaveBeenCalled()
})

test('it checks the locked toggle button for disabled if the gate is open', () => {
    const toggleLockedMock = jest.fn();
    const {getByTestId} = render(<Controls toggleLocked={toggleLockedMock} closed={false} />)

    fireEvent.click(getByTestId("locking-button"))

    expect(toggleLockedMock).not.toHaveBeenCalled()
})

///////////////////////TESTING TEST EVENT CHAINING
//the following does not work:

// test('it tests event chaining', () => {
//     const toggleClosedMock = jest.fn();
//     let fakeClosed = false;
//     const {getByText} = render(<Controls toggleClosed={toggleClosedMock} closed={fakeClosed}/>)
//     // const closingButton = getByTestId("closing-button")

//     fireEvent.click(getByText("Close Gate"))
//     fakeClosed =true;//trying to change a property on a thing that is already rendered
//     expect(toggleClosedMock).toHaveBeenCalled()

//     fireEvent.click(getByText("Open Gate"))

//     expect(toggleClosedMock).toHaveBeenCalled()

// })

