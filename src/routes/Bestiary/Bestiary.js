import React, { Component } from 'react';
import OptionsForm from '../../components/OptionsForm/OptionsForm';
import MonsterApiService from '../../services/monster-api-service';
import Monsters from '../../components/Monsters/Monsters';
import holy from '../../images/White_Materia.png';
import { sortBy } from '../../utils';
import './Bestiary.css';

class Bestiary extends Component {
  state = {
    monsters: [],
    sort: '',
    param: '',
    message: '',
  }

  componentDidMount() {
    MonsterApiService.getMonsters()
      .then((monsters) => {
        this.setState({ monsters });
      })
      .catch();
  }

  renderMonsters = () => {
    const {
      sort, param, term, monsters,
    } = this.state;
    let allMonsters = monsters;
    if (!sort && !term) {
      allMonsters = monsters;
    }

    if (sort) {
      allMonsters = this.renderSorted(sort);
    }

    if (term) {
      allMonsters = this.renderSearched(param, term);
    }

    if (!allMonsters) {
      return 'No Results Found';
    }

    return allMonsters.map((mon) => (
      <Monsters
        id={mon.id}
        key={mon.id}
        name={mon.name}
        hp={mon.hp}
        mp={mon.mp}
        exp={mon.exp}
        ap={mon.ap}
        gil={mon.gil}
        weakness={mon.weakness}
        strength={mon.strength}
        location={mon.location}
        level={mon.level}
        steal={mon.steal}
        drops={mon.drops}
        morph={mon.morph}
        enemy_skill={mon.enemy_skill}
      />
    ));
  }

  renderSearched = (param, term) => {
    /* When searching,  give the user feedback that their query is being executed on the backend
especially  for cases in which no results were returned. I
t's not clear if that message is left from the previous search,
or if the current search is also not returning results.
*/
    const { monsters: allMonsters } = this.state;


    // if the user hits search without filling either field, returns all results
    if (!term || !param) {
      return allMonsters;
    }

    if (term) {
      const contains = (monster) => monster[param.toLowerCase()]
        .toLowerCase()
        .indexOf(term.toLowerCase()) !== -1;
      return allMonsters.filter(contains);
    }
    return null;
  }

  renderSorted = (sort) => {
    const { monsters: allMonsters } = this.state;
    const sortby = sort.toLowerCase();

    // if the sort parameter is a string value, sorts alphabetically
    if (sortby === 'location' || sortby === 'name') {
      allMonsters.sort(sortBy(sortby));
    }
    // if the sort parameter is a number value, sorts by
    // number in descending order (the above returns ascending order)
    else if (sortby === 'gil' || sortby === 'exp') {
      allMonsters.sort(sortBy(sortby, true));
    }

    return allMonsters;
  }

  handleSort = (ev) => {
    const sort = ev.target.value;
    this.setState({
      sort,
    });
  }

  handleReset = () => {
    this.setState({
      param: '',
      sort: '',
    });
    this.renderMonsters();
    document.getElementById('search-form').reset();
  }

  handleSearch = (ev) => {
    ev.preventDefault();
    const term = ev.target.search.value;
    const param = ev.target['filter-by'].value;

    this.setState({
      param,
      term,
    });
  }

  render() {
    const { message } = this.state;
    return (
      <div>
        <section className="bestiary">
          <OptionsForm
            requiredMessage={message}
            handleReset={this.handleReset}
            handleSort={this.handleSort}
            handleSearch={this.handleSearch}
          />
          <div className="page-title">
            <img src={holy} alt="a pale green orb of holy materia from final fantasy 7" className="holy-left" />
            <h1>Bestiary</h1>
            <img src={holy} alt="a pale green orb of holy materia from final fantasy 7" className="holy-right" />
          </div>
          {this.renderMonsters()}
        </section>
      </div>
    );
  }
}

export default Bestiary;
