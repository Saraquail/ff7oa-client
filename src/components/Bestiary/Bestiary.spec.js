import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import renderer from 'react-test-renderer';

import Bestiary from './Bestiary.js'

describe('<Bestiary/>', () => {

  it('renders without crashing', () => {
  const div = document.createElement('div')

  ReactDOM.render(
  <BrowserRouter>
    <Bestiary />
  </BrowserRouter>, div)

  ReactDOM.unmountComponentAtNode(div)
  })

  it('renders the UI as expected', () => {
    const tree = renderer
  .create(
    <BrowserRouter>
      <Bestiary/>
    </BrowserRouter>
  )
  .toJSON();
    expect(tree).toMatchSnapshot();  
  })
})
