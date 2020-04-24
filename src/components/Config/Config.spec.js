import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import renderer from 'react-test-renderer';

import Config from './Config.js'

describe('<Config/>', () => {

  it('renders without crashing', () => {
  const div = document.createElement('div')

  ReactDOM.render(
  <BrowserRouter>
    <Config />
  </BrowserRouter>, div)

  ReactDOM.unmountComponentAtNode(div)
  })

  it('renders the UI as expected', () => {
    const tree = renderer
  .create(
    <BrowserRouter>
      <Config/>
    </BrowserRouter>
  )
  .toJSON();
    expect(tree).toMatchSnapshot();  
  })
})
