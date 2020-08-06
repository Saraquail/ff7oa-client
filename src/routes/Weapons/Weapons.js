import React, { Component } from 'react';
import WeaponApiService from '../../services/weapon-api-service';
import WeaponsList from '../../components/WeaponsList/WeaponsList';

class Weapons extends Component {
  state = {
    weapons: [],
  };

  componentDidMount() {
    WeaponApiService.getWeapons().then((weapons) => {
      this.setState({ weapons });
    });
  }

  renderWeapons = () => {
    const { weapons } = this.state;
    console.log(weapons);
    return weapons.map((weapon) => (
      <WeaponsList
        key={weapon.id}
        name={weapon.name}
        character={weapon.character}
        location={weapon.location}
        slots={weapon.slots}
        growth={weapon.growth}
      />
    ));
  };

  render() {
    return <div>{this.renderWeapons()}</div>;
  }
}

export default Weapons;
