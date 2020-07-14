/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ColorBox from './ColorBox';
import './css/style.css';

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    // passing the palette and the color to filter by into gatherShades below.
    // We are both binding the function here and also passing arguments.
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    this.state = { format: 'hex' };
    this.changeFormat = this.changeFormat.bind(this);
  }

  // This function is used to filter the colors and shades out for the singlecolorpalette.
  gatherShades(palette, colorToFilterBy) {
    // new Array
    let shades = [];

    // setting all colors from palette into variable
    // Allcolors now contains all colors from the palette defined from route, (passed by props to this component)
    // Includes all colorlevels etc.
    const allColors = palette.colors;

    console.log('this is allcolors', allColors);

    for (const key in allColors) {
      // We are filtering on the color key value of allColors, ( all colors in palette )
      // the callback function is then returning the color.id where it matches the id passed in to the function.
      // The id passed into the function is the id that is passed in the route as we click from Palette.js
      // We are then concatinating our filtered value into the shades array.
      console.log('KEY FOUND', allColors[key]);
      // The key takes all colors within a level range forexample "300"
      // all levels are looped over and then concatinated into the shades array.
      // one by one.
      // This gives us a full array of all the levels, and colors that we need.
      shades = shades.concat(allColors[key].filter(color => color.id === colorToFilterBy));
      console.log('ADDED TO  SHADES', shades);
    }
    return shades.slice(1);
  }

  changeFormat(val) {
    this.setState({ format: val });
  }

  render() {
    const { format } = this.state;
    const { id } = this.props.palette;
    const colorBoxes = this._shades.map(color => (
      <ColorBox key={color.name} name={color.name} background={color[format]} showLink={false} />
    ));
    return (
      <div className="SingleColorPalette Palette">
        {/* // Here we pass down handlechange as we also need to change format of the colors in this component
        The showingAllColors prop passed is a boolean to check wether or not we want to show the slider here.
        instead of creating a new Navbar component specifically for this component we use conditional logic */}
        <Navbar handleChange={this.changeFormat} showingAllColors={false} />
        <div className="SinglePalette-colors">
          {colorBoxes}
          {/*  //// The go back colorbox */}
          <div className="go-back ColorBox" style={{ backgroundColor: colorBoxes.name }}>
            <Link to={`/palette/${id}`} className="back-button">
              GO BACK
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default SingleColorPalette;
