import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from '../Landing/Landing';
import Bestiary from '../Bestiary/Bestiary';
import AddMonsterForm from '../AddMonsterForm/AddMonsterForm';
import SaveGuideForm from '../SaveGuideForm/SaveGuideForm';
import PHS from '../PHS/PHS';
import NotFoundPage from '../NotFoundPage';
import Config from '../Config/Config';
import './App.css';

class App extends Component {
  state = {
    displayError: false,
  }

  render() {
    const { displayError } = this.state;
    return (
      <main className="App">

        {displayError && <p className="error">Something went wrong</p>}
        <Switch>
          <Route
            exact
            path="/"
            component={Landing}
          />
          <Route
            path="/bestiary"
            component={Bestiary}
          />
          <Route
            path="/monster-form"
            component={AddMonsterForm}
          />
          <Route
            path="/guide-form"
            component={SaveGuideForm}
          />
          <Route
            path="/PHS"
            component={PHS}
          />
          <Route path="/Config" component={Config} />
          <Route
            component={NotFoundPage}
          />
        </Switch>
      </main>
    );
  }
}
export default App;
