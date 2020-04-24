import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import renderer from 'react-test-renderer';

import OptionsForm from './OptionsForm.js'

describe('<OptionsForm/>', () => {

  it('renders without crashing', () => {
  const div = document.createElement('div')

  ReactDOM.render(
  <BrowserRouter>
  <OptionsForm />
  </BrowserRouter>, div)

  ReactDOM.unmountComponentAtNode(div)
  })

  it('renders the UI as expected', () => {
    const tree = renderer
  .create(
    <BrowserRouter>
      <OptionsForm/>
    </BrowserRouter>
  )
  .toJSON();
    expect(tree).toMatchSnapshot();  
  })
})
