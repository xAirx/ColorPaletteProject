/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-named-as-default */
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import seedColors from './seedColors';
import Palette from './Palette';
import './component.scss';
import { generatePalette } from './colorHelpers';

class App extends Component {
  render() {
    console.log('GENERATED PALETTE', generatePalette(seedColors[4]));
    /* const seedcolors = [] */

    return (
      <>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              <h1>ColorPaletteProject</h1>;
            }}
          />
          <Route
            exact
            path="/palette/:id"
            render={() => {
              <h1>Individual Palette</h1>;
            }}
          />
        </Switch>

        {/*  <div className="App">
          <Palette palette={generatePalette(seedColors[4])} />
        </div> */}
      </>
    );
  }
}

export default App;
