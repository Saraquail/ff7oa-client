import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MonsterApiService from '../../services/monster-api-service';
import './SingleItemView.css';

class SingleItemView extends Component {
  state = {
    mon: {},
  }

  componentDidMount() {
    this.getItem();
  }

  getItem =() => {
    const { monster_id: id } = this.props;

    MonsterApiService.getMonsterById(id)
      .then((data) => this.setState({ mon: data }));
  }

  renderMonster = () => {
    const { mon } = this.state;

    return (
      <div className="single-monster">
        <h2>{mon.name}</h2>
        <p>
          {' '}
          Level:
          {mon.level}
        </p>
        <p>
          {' '}
          HP:
          {mon.hp}
          {' '}
          MP:
          {mon.mp}
        </p>
        <p>
          {' '}
          Exp:
          {mon.exp}
          {' '}
          Ap:
          {mon.ap}
        </p>
        <p>
          {' '}
          Gil:
          {mon.gil}
        </p>
        <p>
          {' '}
          Strength:
          {mon.strength}
        </p>
        <p>
          {' '}
          Weakness:
          {mon.weakness}
        </p>
        <p>
          {' '}
          Location:
          {mon.location}
        </p>
        <p>
          {' '}
          Steal:
          {mon.steal}
        </p>
        <p>
          {' '}
          Drop:
          {mon.drops}
          {' '}
          Morph:
          {mon.morph}
        </p>
        <p>
          {' '}
          Enemy_skill:
          {mon.enemy_skill}
        </p>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderMonster()}
      </div>
    );
  }
}

SingleItemView.propTypes = {
  monster_id: PropTypes.string,
};

export default SingleItemView;
