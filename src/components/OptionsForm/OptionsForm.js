import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class OptionsForm extends Component {

  // handleOption = ev => {
  //   let sort = ev.target.value
  //   console.log(sort)

  // }

  render () {
    return (
      <section id="bestiary-options">
      <label htmlFor="sort-by">Sort by:</label>
      <select defaultValue="Name" onChange={this.props.handleSort}>
        <option>Name</option>
        <option>GIL</option>
        <option>Location</option>
        <option>EXP</option>
      </select>

      <form name="search-form" id="search-form" onSubmit={this.props.handleSearch}>
      <label htmlFor="filter-by">Search by:</label>
      <select name="filter-by" id="filter-by">
        <option>Location</option>
        <option>Name</option>
        <option>Drops</option>
        <option>Steal</option>
        <option>Enemy Skill</option>
      </select>
      <label htmlFor="search">Search:</label>
        <input type="text" name="search" id="search" />
        <button type='submit'>Search</button>
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