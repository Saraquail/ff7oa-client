import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class OptionsForm extends Component {

  render () {
    return (
      <section id="bestiary-options">
      <label htmlFor="sort-by">Sort by:</label>
      <select>
        <option>Name</option>
        <option>HP</option>
        <option>GIL</option>
        <option>Type</option>
        <option>Level</option>
        <option>EXP</option>
      </select>
      <label htmlFor="filter-by">Filter by:</label>
      <select>
        <option>Location</option>
        {/* <option>Type</option>
        <option>Disc</option> */}
      </select>
      <label htmlFor="search-bestiary">Search:</label>
        <input type="text" name="search-bestiary" id="search-bestiary" />
      <button>
        <Link to="/monster-form">
          Add New
        </Link>
      </button>
    </section>
    )
  }
}

export default OptionsForm