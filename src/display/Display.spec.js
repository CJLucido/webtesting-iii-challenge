// Test away!

import {render, fireEvent} from '@testing-library/react'
import Display from './Display'

import React from 'react'

test('It renders Display', ()=>{
    expect(render(<Display/>)).toMatchSnapshot()
})

test('it shows locked or unlocked text', ()=>{})

test('it shows closed or open text', ()=>{})