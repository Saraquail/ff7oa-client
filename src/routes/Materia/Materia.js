import React, { Component } from 'react';
import MateriaApiService from '../../services/materia-api-service';
import MateriaList from '../../components/MateriaList/MateriaList';

class Materia extends Component {
  state = {
    materia: [],
  };

  componentDidMount() {
    MateriaApiService.getMateria().then((materia) => {
      this.setState({ materia });
    });
  }

  renderMateria = () => {
    const { materia } = this.state;

    return materia.map((mat) => (
      <MateriaList
        id={mat.id}
        key={mat.id}
        name={mat.name}
        type={mat.type}
        desc={mat.description}
        location={mat.location}
        ap={mat.ap}
        mp={mat.mp}
        skills={mat.skills}
        sell={mat.sell}
      />
    ));
  };

  render() {
    return <div>{this.renderMateria()}</div>;
  }
}

export default Materia;
