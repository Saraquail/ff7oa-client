import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from '../../routes/Landing/Landing';
import Nav from '../Nav/Nav';
import Bestiary from '../../routes/Bestiary/Bestiary';
import Weapons from '../../routes/Weapons/Weapons';
import Limits from '../../routes/Limits/Limits';
import Materia from '../../routes/Materia/Materia';
import PHS from '../../routes/PHS/PHS';
import NotFoundPage from '../../routes/NotFoundPage';
import Config from '../Config/Config';
import './App.css';

class App extends Component {
  state = {
    displayError: false,
  };

  render() {
    const { displayError } = this.state;
    return (
      <main className="App">
        {displayError && <p className="error">Something went wrong</p>}
        <Nav />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/weapons" component={Weapons} />
          <Route path="/bestiary" component={Bestiary} />
          <Route path="/materia" component={Materia} />
          <Route path="/limits" component={Limits} />
          <Route path="/PHS" component={PHS} />
          <Route path="/Config" component={Config} />
          <Route component={NotFoundPage} />
        </Switch>
      </main>
    );
  }
}
export default App;
