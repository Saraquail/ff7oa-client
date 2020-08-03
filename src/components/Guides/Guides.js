import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import SingleItemView from '../SingleItemView/SingleItemView';
import GuideApiService from '../../services/guide-api-service';
import './Guides.css';

class Guides extends Component {
  state = {
    showMon: false,
    // walkthrough_id: '',
    message: '',
    // add in when making these dismissable
    // guides: this.props,
  }

  handleClick = () => {
    // const id = ev.target.value;
    this.setState((prevState) => ({
      showMon: !prevState.showMon,
      // walkthrough_id: id,
    }));
  }

  handleDelete = (ev) => {
    const guide_id = ev.target.value;
    const { deleteGuide } = this.props;

    GuideApiService.deleteGuide(guide_id)
      .then(deleteGuide(guide_id))
      .catch((e) => this.setState({ message: e.error }));
  }

  render() {
    const {
      id, name, note, walkthrough_id,
    } = this.props;
    const { showMon } = this.state;

    if (!name || !note) {
      return <p>Loading Guides</p>;
    }

    const { message } = this.state;
    return (
      <section className="guides">
        {message ? { message } : ''}
        <div className="guides-list">
          <h3 className="guide-name" id={walkthrough_id}>
            name:
            {name}
          </h3>
          <p className="guide-note">
            note:
            {note}
          </p>
          <button
            type="button"
            value={id}
            onClick={(ev) => this.handleDelete(ev)}
          >
            Delete
          </button>
          <button
            type="button"
            value={walkthrough_id}
            onClick={(ev) => this.handleClick(ev)}
          >
            {showMon ? 'Close' : 'Open Below' }
          </button>
        </div>
        {showMon
          ? <SingleItemView monster_id={walkthrough_id} />
          : ''}
      </section>
    );
  }
}

Guides.propTypes = {
  id: PropTypes.string,
  walkthrough_id: PropTypes.string,
  name: PropTypes.string,
  note: PropTypes.string,
  deleteGuide: PropTypes.func.isRequired,
};

export default withRouter(Guides);
