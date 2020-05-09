/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-named-as-default */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './component.scss';
import ColorBox from './ColorBox';

export class singlecolorpalette extends Component {
  constructor(props) {
    super(props);

    this.state = { level: 500, format: 'hex' };
  }

  render() {
    console.log(this.state.level);
    console.log('THESE ARE OUR PROPS', this.props);

    const { colors } = this.props.palette;
    const { level, format } = this.state;

    const colorBoxes = colors[level].map(function(color) {
      return <ColorBox background={color[format]} name={color.id} id={color.id} />;
    });

    return (
      <div>
        <div className="Palette">
          {/* ///////// The slider component from the rc-slider library, takes a min max, defaultvalue
        // along with calling a function afterchange, step is added in to ensure that we step in 100's else our application
        // wont work. */}

          <Navbar />
          <div className="Palette-colors">{colorBoxes}</div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default singlecolorpalette;
