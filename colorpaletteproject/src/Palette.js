/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/no-unused-state */
/* eslint-disable class-methods-use-this */
/* eslint-disable import/order */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-named-as-default */
/* eslint-disable no-unused-expressions */
/* eslint-disable array-callback-return */
import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import Footer from './Footer';
import './component.scss';

export class Palette extends Component {
  constructor(props) {
    super(props);

    this.state = { level: 500, format: 'hex' };
    this.changeLevel = this.changeLevel.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
  }

  changeLevel(newLevel) {
    this.setState({ level: newLevel });
  }

  changeFormat(val) {
    /*  alert(val); */
    this.setState({ format: val }, () => {
      console.log('Successfully set state', this.state.format);
    });
  }

  render() {
    console.log(this.state.level);
    /*  const { colors } = this.props; */

    /* const colorBoxes = this.props.colors.map(color => {
             <ColorBox background={color.color} name={color.name}/>
    }) */

    // The new palette passed from app.js, from colorHelpers.js
    // Has color values, from 50-900, picking one will display
    // Corresponding colors.

    const { colors } = this.props.palette;
    const { level, format } = this.state;

    const colorBoxes = colors[level].map(function(color) {
      return <ColorBox background={color[format]} name={color.name} id={color.id} />;
    });

    return (
      <div className="Palette">
        {/* ///////// The slider component from the rc-slider library, takes a min max, defaultvalue
        // along with calling a function afterchange, step is added in to ensure that we step in 100's else our application
        // wont work. */}

        <Navbar handleChange={this.changeFormat} level={level} changeLevel={this.changeLevel} />
        <div className="Palette-colors">
          {/* colorBoxes */}
          {colorBoxes}
        </div>
        <Footer />
      </div>
    );
  }
}

export default Palette;
