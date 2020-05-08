/* eslint-disable import/no-named-as-default */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Palette from './Palette';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';
import './component.scss';
import PaletteList from './palettelist';

class App extends Component {
  findPalette(id) {
    return seedColors.find(function(palette) {
      return palette.id === id;
    });
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <PaletteList palettes={seedColors} />} />
        <Route
          exact
          path="/palette/:id"
          /* We run generate palette on our findPalette function, we take the ID from the URL
          then we pass that into generatePalette which then maps the id within our new palette object, in
          colorHelpers.js and then returns the correct palette to the component as the palette prop */
          render={routeProps => <Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))} />}
        />
      </Switch>

      // <div>
      //   <Palette palette={generatePalette(seedColors[4])} />
      // </div>
    );
  }
}

export default App;
