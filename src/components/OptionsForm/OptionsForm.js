import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './OptionsForm.css'

class OptionsForm extends Component {

  render () {
    return (
      <section id="bestiary-options">
      <label htmlFor="sort-by">Sort by:</label>
      <select defaultValue="" onChange={this.props.handleSort}>
        <option>-select-</option>
        <option>Name</option>
        <option>GIL</option>
        <option>Location</option>
        <option>EXP</option>
      </select>

      <form name="search-form" id="search-form" onSubmit={this.props.handleSearch}>
      <label htmlFor="filter-by">Search by:</label>
      <select defaultValue="" name="filter-by" id="filter-by">
        <option>-select-</option>
        <option>Location</option>
        <option>Name</option>
        <option>Drops</option>
        <option>Steal</option>
        <option>Enemy Skill</option>
      </select>
      <label htmlFor="search">Search:</label>
        <input type="text" name="search" id="search" />
        <button type='submit'>Search</button>
        <button onClick={this.props.handleReset}>Reset</button>
        </form>
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