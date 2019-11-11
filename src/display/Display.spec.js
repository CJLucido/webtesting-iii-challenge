// Test away!

import {render, fireEvent} from '@testing-library/react'
import Display from './Display'

import React from 'react'

test('It renders Display', ()=>{
    expect(render(<Display/>)).toMatchSnapshot()
})

test('it shows unlocked text on the highlighted area', ()=>{
    let fakeLocked = false;
    let {getByText} = render(<Display locked={fakeLocked}/>)
    const unlockedText = getByText('Unlocked')

    expect(unlockedText)

})

test('it shows locked text on the highlighted area', ()=>{
    let fakeLocked = true;
    let {getByText} = render(<Display locked={fakeLocked}/>)
    const lockedText = getByText('Locked')
    expect(lockedText)
})


test('it shows open text on the highlighted area', ()=>{
    const fakeClosed = false;
    const {getByText} = render(<Display closed={fakeClosed}/>)
    expect(getByText('Open'))
})



test('it shows closed text on the highlighted area', ()=>{
    let fakeClosed = true;
    const {getByText} = render(<Display closed={fakeClosed}/>)
    expect(getByText('Closed'))
})