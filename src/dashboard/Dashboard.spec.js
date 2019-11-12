// Test away
import {render} from '@testing-library/react'
import Dashboard from './Dashboard'

import React from 'react'


test('It renders Dashboard', ()=>{
    expect(render(<Dashboard/>)).toMatchSnapshot()
})

test('It renders Display in Dashboard', ()=>{
    const {getByTestId} = render(<Dashboard/>)
    const displayDash = getByTestId('display-component')
    expect(displayDash).toBeTruthy()
})

test('It renders Controls in Dashboard', ()=>{
    const {getByTestId} = render(<Dashboard/>)
    const controlsDash = getByTestId('controls-component')
    expect(controlsDash).toBeTruthy()
})