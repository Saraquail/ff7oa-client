import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import MonsterApiService from '../../services/monster-api-service';
import TokenService from '../../services/token-service';
import Guides from './Guides';
import holy from '../../images/White_Materia.png';
import './PHS.css';

class PHS extends Component {
  state = {
    guides: [],
    message: '',
  }

  componentDidMount() {
    const user_name = TokenService.getUserName();

    MonsterApiService.getUserGuides(user_name)
      .then((data) => {
        this.setState({
          guides: data,
        });
      })
      .catch((e) => {
        this.setState({
          message: e.error,
        });
      });
  }

  deleteGuide = (id) => {
    const { guides: prevGuides } = this.state;
    // != instead of !== because one is a number and one is a string
    /* eslint-disable-next-line eqeqeq */
    const filtered = prevGuides.filter((item) => item.id != id);

    this.setState({
      guides: filtered,
    });
  }

  renderGuides() {
    const { guides } = this.state;

    return guides.map((guide) => (
      <Guides
        deleteGuide={this.deleteGuide}
        id={guide.id}
        monster_id={guide.monster_id}
        key={guide.id}
        name={guide.name}
        note={guide.note}
      />
    ));
  }

  render() {
    const { message } = this.state;
    return (
      <div>
        <Nav />
        <section className="PHS">
          <div className="page-title">
            <img src={holy} alt="a pale green orb of holy materia from final fantasy 7" className="holy-left" />
            <h1>My PHS</h1>
            <img src={holy} alt="a pale green orb of holy materia from final fantasy 7" className="holy-right" />
          </div>
          <p className="onboarding">In FF7, your PHS is your Personal Handheld System. This is basically a cellphone you can use to interact with your party members. Here, your PHS is a list of monsters you’ve saved for quick reference. </p>
          <h2>My Saved Guides:</h2>
          {message
            ? <p id="message">{message}</p>
            : '' }
          {this.renderGuides()}
        </section>
      </div>
    );
  }
}

export default PHS;
