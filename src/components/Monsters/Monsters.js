import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { HashLink as Link } from 'react-router-hash-link';
import SaveGuideForm from '../SaveGuideForm/SaveGuideForm';
import './Monsters.css';

class Monsters extends Component {
  state = {
    showModal: false,
    selectedid: '',
    expanded: false,
    // sort: '',
  }

  handleExpand = () => {
    this.setState((prevState) => ({
      expanded: !prevState.expanded,
    }));
  }

  handleOpenModal = (e) => {
    const id = e.target.value;
    console.log(e.target.value);
    this.setState({
      showModal: true,
      selectedid: id,
    });
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false,
    });
  }

  renderAllMons = () => {
    const {
      id,
      name,
      hp,
      mp,
      exp,
      ap,
      gil,
      weakness,
      strength,
      location,
      level,
      drops,
      steal,
      morph,
      enemy_skill,
    } = this.props;
    if (!name) {
      return <p>Loading Monsters</p>;
    }

    const { expanded, showModal } = this.state;

    return (
      <section className="monsterList">
        <div className="monster">
          <div className="collapsed">
            <h2 id={id}>{name}</h2>
            <button
              type="button"
              value={id}
              onClick={(e) => this.handleOpenModal(e)}
            >
              {' '}
              Add to My PHS
            </button>
            <Link to={`#${id}`} id="expand">
              <button type="button" id="expand" onClick={this.handleExpand}>
                Click for more/less info
              </button>
            </Link>
            {' '}
            <p>
              {' '}
              Level:
              {level}
            </p>
            <p>
              {' '}
              HP:
              {hp}
              {' '}
              MP:
              {mp}
              {' '}
            </p>
            <p>
              {' '}
              Exp:
              {exp}
              {' '}
              Ap:
              {ap}
            </p>
            <p>
              Gil:
              {gil}
            </p>
            <p>
              {' '}
              Strength:
              {strength}
            </p>
            <p>
              {' '}
              Weakness:
              {weakness}
            </p>
          </div>
          {expanded
            ? (
              <div className="expanded">
                <p>
                  {' '}
                  Location:
                  {location}
                </p>
                <p>
                  {' '}
                  Steal:
                  {steal}
                </p>
                <p>
                  {' '}
                  Drop:
                  {drops}
                  {' '}
                  Morph:
                  {morph}
                </p>
                <p>
                  {' '}
                  Enemy_skill:
                  {enemy_skill}
                </p>
              </div>
            )
            : ''}
        </div>
        {showModal
          ? (
            <SaveGuideForm
              className="modal overlay"
              selectedid={id}
              handleCloseModal={this.handleCloseModal}
              onRequestClose={this.handleCloseModal}
            />
          )
          : ''}
      </section>

    );
  }


  render() {
    return (
      <div>
        {this.renderAllMons()}
      </div>
    );
  }
}

Monsters.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  hp: PropTypes.number,
  mp: PropTypes.number,
  exp: PropTypes.number,
  ap: PropTypes.number,
  gil: PropTypes.number,
  weakness: PropTypes.string,
  strength: PropTypes.string,
  location: PropTypes.string,
  level: PropTypes.number,
  drops: PropTypes.string,
  steal: PropTypes.string,
  morph: PropTypes.string,
  enemy_skill: PropTypes.string,
};

export default Monsters;
