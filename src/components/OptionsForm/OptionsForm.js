import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './OptionsForm.css';

function OptionsForm({ handleReset, handleSearch, handleSort }) {
  return (
    <section id="bestiary-options">
      <form name="search-form" id="search-form" onSubmit={handleSearch}>
        <label htmlFor="filter-by">Search by:</label>
        <select id="filter-by" defaultValue="" name="filter-by">
          <option>-select-</option>
          <option>Location</option>
          <option>Name</option>
          <option>Drops</option>
          <option>Steal</option>
          <option>Enemy Skill</option>
        </select>
        <label htmlFor="search">Search:</label>
        <input type="text" name="search" id="search" />
        <button type="submit">Search</button>
        <button
          type="button"
          onClick={handleReset}
        >
          Reset
        </button>
      </form>

      <div className="sort-and-add">
        <label htmlFor="sort-by">Sort by:</label>
        <select name="sort-by" id="sort-by" defaultValue="" onChange={handleSort}>
          <option>-select-</option>
          <option>Name</option>
          <option>GIL</option>
          <option>Location</option>
          <option>EXP</option>
        </select>
        <Link to="/monster-form" id="add-monster-button">
          <button id="add-monster-button" type="button">
            Add New
          </button>
        </Link>
      </div>
    </section>
  );
}

OptionsForm.propTypes = {
  handleReset: PropTypes.func,
  handleSearch: PropTypes.func,
  handleSort: PropTypes.func,
};

export default OptionsForm;
