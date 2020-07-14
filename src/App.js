/* eslint-disable import/no-named-as-default */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './Palette';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';
import './css/style.css';
import PaletteList from './palettelist';
import SingleColorPalette from './singlecolorpalette';

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
        <Route
          exact
          path="/palette/:paletteId/:colorId"
          /* THe singleColorPalette route is similar to the palette route, we are matching on differnet parameters
          /* //also passing in a colorId, the colorId, and Palette id are used as part of the route definition to grab the correct palette. */
          render={routeProps => (
            <SingleColorPalette
              colorId={routeProps.match.params.colorId}
              palette={generatePalette(this.findPalette(routeProps.match.params.paletteId))}
            />
          )}
        />
      </Switch>

      // <div>
      //   <Palette palette={generatePalette(seedColors[4])} />
      // </div>
    );
  }
}

export default App;
