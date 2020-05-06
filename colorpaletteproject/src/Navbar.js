/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
// / The order here matters, we add the vendor css
// / and we override the default css. with our css.
// / THE ORDER MATTERS.
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';
import './Navbar.css';
import { Select, MenuItem } from '@material-ui/core';

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
        <div className="SelectContainer">
          <Select onChange={this.props.handleChange}>
            <MenuItem value="hex">HEX - #ffff</MenuItem>
            <MenuItem value="rgb">RGB - RGB(255.255.255.0)</MenuItem>
            <MenuItem value="rgba">RGBA -RGBA(255.255.255.0)</MenuItem>
          </Select>
        </div>
      </header>
    );
  }
}

export default Navbar;
