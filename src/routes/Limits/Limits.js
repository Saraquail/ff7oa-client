import React, { Component } from 'react';
import LimitApiService from '../../services/limit-api-service';
import LimitsList from '../../components/LimitsList/LimitsList';

class Limits extends Component {
  state = {
    limits: [],
  };

  componentDidMount() {
    LimitApiService.getLimits().then((limits) => {
      this.setState({ limits });
    });
  }

  renderLimits = () => {
    const { limits } = this.state;
    console.log(limits);
    return limits.map((lim) => (
      <LimitsList key={lim.id} name={lim.name} character={lim.character} level={lim.level} desc={lim.description} obtain_by={lim.obtain_by} />
    ));
  };

  render() {
    return <div>{this.renderLimits()}</div>;
  }
}

export default Limits;
