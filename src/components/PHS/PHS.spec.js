import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import renderer from 'react-test-renderer';

import PHS from './PHS.js'

describe('<PHS/>', () => {

  it('renders without crashing', () => {
  const div = document.createElement('div')

  ReactDOM.render(
  <BrowserRouter>
    <PHS />
  </BrowserRouter>, div)

  ReactDOM.unmountComponentAtNode(div)
  })

  it('renders the UI as expected', () => {
    const tree = renderer
  .create(
    <BrowserRouter>
      <PHS/>
    </BrowserRouter>
  )
  .toJSON();
    expect(tree).toMatchSnapshot();  
  })
})
