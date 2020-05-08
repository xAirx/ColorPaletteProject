/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
// / The order here matters, we add the vendor css
// / and we override the default css. with our css.
// / THE ORDER MATTERS.
import 'rc-slider/assets/index.css';
import './component.scss';

export class palettelistNavbar extends Component {
  render() {
    return (
      <header className="paletteNavbar">
        <div className="paletteListLogo ">
          <a className="rainbow rainbow_text_animated" href="#">
            ColorPaletteProject
          </a>
        </div>
      </header>
    );
  }
}

export default palettelistNavbar;
