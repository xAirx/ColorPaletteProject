/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
// / The order here matters, we add the vendor css
// / and we override the default css. with our css.
// / THE ORDER MATTERS.
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';
import './Navbar.css';

export class Navbar extends Component {
  render() {
    return (
      <header className="Navbar">
        <div className="logo ">
          <a className="rainbow rainbow_text_animated" href="#">
            ColorPaletteProject
          </a>
        </div>

        <div className="slider-container">
          <span>Level - {this.props.level} </span>
          <div className="slider">
            <Slider
              defaultValue={this.props.level}
              min={100}
              max={900}
              step={100}
              onAfterChange={this.props.changeLevel}
            />
          </div>
        </div>
      </header>
    );
  }
}

export default Navbar;
