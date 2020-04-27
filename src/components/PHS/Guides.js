import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import SingleItemView from '../SingleItemView/SingleItemView';
import TokenService from '../../services/token-service';
import MonsterApiService from '../../services/monster-api-service';
import './Guides.css';

class Guides extends Component {
  state = {
    showMon: false,
    monster_id: '',
    message: '',
    // add in when making these dismissable
    // guides: this.props,
  }

  handleClick = (ev) => {
    const id = ev.target.value;
    this.setState((prevState) => ({
      showMon: !prevState.showMon,
      monster_id: id,
    }));
  }

  handleDelete = (ev) => {
    const guide_id = ev.target.value;
    const user_name = TokenService.getUserName();
    const { deleteGuide } = this.props;

    MonsterApiService.deleteGuide(user_name, guide_id)
      .then(deleteGuide(guide_id))
      .catch((e) => this.setState({ message: e.error }));
  }

  render() {
    const { guides } = this.props;
    const { showMon, monster_id } = this.state;

    if (!guides) {
      return <p>Loading Guides</p>;
    }

    const { message } = this.state;
    return (
      <section className="guides">
        {message ? { message } : ''}
        <div className="guides-list">
          <h3 className="guide-name" id={guides.monster_id}>
            name:
            {guides.name}
          </h3>
          <p className="guide-note">
            note:
            {guides.note}
          </p>
          <button
            type="button"
            value={guides.id}
            onClick={(ev) => this.handleDelete(ev)}
          >
            Delete
          </button>
          <button
            type="button"
            value={guides.monster_id}
            onClick={(ev) => this.handleClick(ev)}
          >
            {showMon ? 'Close' : 'Open Below' }
          </button>
        </div>
        {showMon
          ? <SingleItemView monster_id={monster_id} />
          : ''}
      </section>
    );
  }
}

Guides.propTypes = {
  id: PropTypes.string,
  guides: PropTypes.arrayOf(PropTypes.string),
  monster_id: PropTypes.string,
  name: PropTypes.string,
  note: PropTypes.string,
  deleteGuide: PropTypes.func.isRequired,
};

export default withRouter(Guides);
