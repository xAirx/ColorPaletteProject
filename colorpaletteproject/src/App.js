/* eslint-disable import/no-named-as-default */
import React, { Component } from 'react';
import seedColors from './seedColors';
import Palette from './Palette';
import './App.css';
import { generatePalette } from './colorHelpers';

class App extends Component {
  render() {
    console.log('GENERATED PALETTE', generatePalette(seedColors[4]));
    /* const seedcolors = [] */

    return (
      <div className="App">
        {/*  <Palette palette={seedColors[4]}/> */}
        {/* /Passing in our props from seedColors
        individually. */}
        <Palette {...seedColors[4]} />
      </div>
    );
  }
}

export default App;
