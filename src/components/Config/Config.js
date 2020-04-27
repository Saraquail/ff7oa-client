import React, { useState } from 'react';
import Nav from '../Nav/Nav';
import './Config.css';
// this component is for a future goal of user configuring
// theme settings based on the menu config in the game
// it works as is, and is a fun nostaligic experience for
// people who are familiar with Final Fantasy 7.

const INITIAL_STATE = {
  URC_open: false,
  ULC_open: false,
  LRC_open: false,
  LLC_open: false,
  URC: {
    Red: '0',
    Green: '0',
    Blue: '128',
  },
  ULC: {
    Red: '0',
    Green: '0',
    Blue: '173',
  },
  LRC: {
    Red: '0',
    Green: '0',
    Blue: '32',
  },
  LLC: {
    Red: '0',
    Green: '0',
    Blue: '88',
  },
};

const Config = () => {
  const [state, setState] = useState(INITIAL_STATE);

  /* currying */
  const handleColorChange = (corner, color) => (e) => {
    const values = state[corner];
    const newValues = { ...values, [color]: e.target.value };
    setState({ ...state, [corner]: { ...newValues } });
  };

  const handleClick = (ev) => {
    const toggleCorner = ev.target.value;
    const toggleKey = `${toggleCorner}_open`;
    setState((prevState) => ({
      ...state,
      [toggleKey]: !prevState[toggleKey],
    }));
  };

  const corners = ['URC', 'ULC', 'LRC', 'LLC'];
  const colors = ['Red', 'Green', 'Blue'];
  const labels = {
    URC: 'Upper Right Corner',
    ULC: 'Upper Left Corner',
    LRC: 'Lower Right Corner',
    LLC: 'Lower Left Corner',
  };

  const input = corners.map((corner) => colors.map((color) => (
    <div
      className={`${corner}`}
      key={`${corner}${color}`}
    >
      <label htmlFor={`${corner}${color}`}>
        {`${labels[corner]} ${color} value`}
      </label>
      <input
        className={`${corner}`}
        name={`${corner}${color}`}
        id={`${corner}${color}`}
        type="range"
        min="0"
        max="255"
        onChange={handleColorChange(corner, color)}
      />
      {state[corner][color]}
    </div>
  )));

  // creates CSS custom prop for each corner and color
  // then creates an array - 1st value is property name, second value is the corner and colors
  // @example
  /*
    [
      ['--URC-Red', 0],
      ['--URC-Green', 22],
      ...
    ]
  */
  const styleArr = corners.map((corner) => colors.map((color) => [`--${corner}-${color}`, state[corner][color]]));

  // takes an array of [key, value] and converts it to an object of
  // key/value pairs like { key: value }
  const styles = styleArr
    .reduce((obj, [red, green, blue]) => ({
      ...obj,
      [red[0]]: red[1],
      [green[0]]: green[1],
      [blue[0]]: blue[1],
    }), {});

  return (
    <div className="config-menu" style={styles}>
      <Nav />
      <p className="onboarding">
        This is an experimental feature.
        Play around as you like and adjust the background
        color for this page just like in the original game!
        Have fun, and come back soon to see this implemented around the site.
      </p>
      <button type="button" className="input-group" value="URC" onClick={handleClick}>
        {state.URC_open ? 'Close Upper Right Corner' : 'Adjust Upper Right Corner' }
      </button>
      {state.URC_open ? input[0] : '' }

      <button type="button" className="input-group" value="ULC" onClick={handleClick}>
        {state.ULC_open ? 'Close Upper Left Corner' : 'Adjust Upper Left Corner' }
      </button>
      {state.ULC_open ? input[1] : ''}

      <button type="button" className="input-group" value="LRC" onClick={handleClick}>
        {state.LRC_open ? 'Close Lower Right Corner' : 'Adjust Lower Right Corner' }
      </button>
      {state.LRC_open ? input[2] : ''}

      <button type="button" className="input-group" value="LLC" onClick={handleClick}>
        {state.LLC_open ? 'Close Lower Left Corner' : 'Adjust Lower Left Corner' }
      </button>
      {state.LLC_open ? input[3] : ''}
    </div>
  );
};

export default Config;
