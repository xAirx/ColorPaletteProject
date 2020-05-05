/* eslint-disable import/no-named-as-default */
import React, { Component } from 'react';
import seedColors from './seedColors';
import Palette from './Palette';

class App extends Component {
  render() {
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
