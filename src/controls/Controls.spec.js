// Test away!
import React from 'react' 

import {render, fireEvent} from '@testing-library/react'
import Controls from './Controls'



test('It renders Controls', ()=>{
    expect(render(<Controls/>)).toMatchSnapshot()
})

test('it shows unlock gate or lock gate text', ()=>{})

test('it shows close gate or open gate text', ()=>{})

test('it calls toggleLockedMock on button click', () => {})

test('it calls toggleclosedMock on button click', () => {})


//lockgate
// const closeGate = getByText('Close Gate')

// //lockgate then
// const openGate = getByText('Open Gate')
// const unlockGate = getByText('Unlock Gate')