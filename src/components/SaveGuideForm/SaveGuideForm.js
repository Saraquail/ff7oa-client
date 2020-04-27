import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TokenService from '../../services/token-service';
import MonsterApiService from '../../services/monster-api-service';
import './SaveGuideForm.css';

class SaveGuideForm extends Component {
  state = {
    name: '',
    note: '',
    message: '',
  }

  clearForm = () => {
    document.getElementById('add-guide-form').reset();
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    const { selectedid: id, handleCloseModal } = this.props;
    const { name, note } = this.state;

    const user_name = TokenService.getUserName();
    const guide = {
      monster_id: id,
      name,
      note,
      user_name,
    };

    MonsterApiService.postGuide(user_name, guide)
      .then(this.clearForm)
      .then(handleCloseModal)
      .catch((e) => this.setState({ message: e.error }));
  }

  handleInputChange = (ev) => {
    ev.preventDefault();
    const { target } = ev;
    const { value } = target;
    const { name } = target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { handleCloseModal } = this.props;
    const { message } = this.state;

    return (
      <div className="overlay-container">
        <div className="overlay modal">
          <form name="add-guide-form" id="add-guide-form" onSubmit={this.handleSubmit}>
            <label htmlFor="nickname">Nickname</label>
            {/* eslint-disable-next-line jsx-a11y/no-autofocus */}
            <input autoFocus type="text" name="nickname" id="nickname" required onChange={this.handleInputChange} />
            <label htmlFor="note">Note</label>
            <input type="text" name="note" id="note" required onChange={this.handleInputChange} />
            <button className="add-guide-button" type="submit">OK, add it</button>
            <button type="button" className="add-guide-button" onClick={handleCloseModal}>Not Interested</button>
            {message ? <p id="message">{message}</p> : ''}
          </form>
        </div>
      </div>
    );
  }
}

SaveGuideForm.propTypes = {
  selectedid: PropTypes.string,
  handleCloseModal: PropTypes.func,
};

export default SaveGuideForm;
