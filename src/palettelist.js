/* eslint-disable import/no-named-as-default */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export class Palettelist extends Component {
  render() {
    const { palettes } = this.props;
    console.log(palettes);

    /*     /// Mapping palettes, these palettes are going to become the small miniboxes, we are also creating
     a link in here so that we can click the title to move on to the palette component with react routing */
    const mappedPalettes = palettes.map(palette => (
      <div className="Minibox" style={{ color: palette.colors }} key={palette.name}>
        <div className="MiniPalette-Title">
          {/* // Linking to the palette with the passed in ID from our palette
          our route in app.js needs this ID as part of its route definition */}
          <Link to={`/palette/${palette.id}`}>{palette.paletteName} </Link>
        </div>
        {/*         // the wrapper for the small miniboxes, mapping them out here and setting default styles
         */}
        <div className="MiniColorInnerWrapper">
          {palette.colors.map(singlecolor => (
            <div className="Minicolor" style={{ height: '30px', backgroundColor: singlecolor.color }}></div>
          ))}
        </div>
      </div>
    ));

    /* console.log(mappedPalettes); */

    return (
      <div className="Palette">
        <Navbar showingAllColors={false} showingFrontPage />
        <div className="PaletteListWrapper">
          <div className="Palette-Wrapper">
            {mappedPalettes}
            {/*  {palettes.map(palette => (
            <miniPalette {...palettes} />
          ))} */}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Palettelist;
