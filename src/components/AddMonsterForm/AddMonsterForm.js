import React, { Component } from 'react'

class AddMonsterForm extends Component {
  render () {
    return (
      <form name="add-monster-form">
        <label htmlFor="add-name">Name</label>
        <input type="text" name="add-name" id="add-name" required=""/>
        <label htmlFor="add-hp">HP</label>
        <input type="text" name="add-hp" id="add-hp" required=""/>
        <label htmlFor="add-mp">MP</label>
        <input type="text" name="add-mp" id="add-mp" required=""/>
        <label htmlFor="add-gil">GIL</label>
        <input type="text" name="add-gil" id="add-gil" required=""/>
        <label htmlFor="add-gil">Weakness</label>
        <input type="text" name="add-weakness" id="add-weakness" required=""/>
        <label htmlFor="add-strength">Strength</label>
        <input type="text" name="add-strength" id="add-strength" required=""/>
        <label htmlFor="add-location">Location</label>
        <input type="text" name="add-location" id="add-location" required=""/>
        <label htmlFor="add-level">Level</label>
        <input type="text" name="add-level" id="add-level" required=""/>
        <label htmlFor="add-steal">Steal</label>
        <input type="text" name="add-steal" id="add-steal" required=""/>
        <label htmlFor="add-drop">Drop</label>
        <input type="text" name="add-drop" id="add-drop" required=""/>
        <button>Not Interested</button>
        <button type="submit">OK, add it</button>
      </form>
    )
  }
}

export default AddMonsterForm