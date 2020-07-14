/* eslint-disable import/no-named-as-default */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import Footer from './Footer';
import './css/style.css';

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500, format: 'hex' };
    this.changeLevel = this.changeLevel.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
  }

  // / Here we are defining functions to change level of the color (color intensity), this method is passed
  // To the navbar component which handles setting the level of the colors.
  changeLevel(level) {
    console.log('I AM CALLED', level);
    this.setState({ level });
    console.log('level change');
  }

  // / Here we are defining functions to change format of the color (color format), this method is passed
  // To the navbar component which handles setting the format of the colors.
  changeFormat(val) {
    console.log('I AM CALLED CHANGE FORMAT');
    this.setState({ format: val });
  }

  render() {
    const { colors, paletteName, emoji, id } = this.props.palette;
    const { level, format } = this.state;

    // level is passed in here from state, and format too, used to render our color box by passing the values down as props
    // The moreURL, is made to create an easy route through props.
    const colorBoxes = colors[level].map(color => (
      <ColorBox
        background={color[format]}
        name={color.name}
        key={color.id}
        moreUrl={`/palette/${id}/${color.id}`}
        showLink
      />
    ));
    return (
      <div className="SingleColorPalette Palette">
        {/* // Here we pass down handlechange as we also need to change format of the colors in this component
      The showingAllColors prop passed is a boolean to check wether or not we want to show the slider here.
      instead of creating a new Navbar component specifically for this component we use conditional logic */}
        <Navbar
          level={this.state.level}
          handleChange={this.changeFormat}
          changeLevel={this.changeLevel}
          showingAllColors
          showingPalette
        />
        <div className="FirstPalette-colors">
          {colorBoxes}
          {/*  //// The go back colorbox */}
        </div>
        <Footer />
      </div>
    );
  }
}
export default Palette;
