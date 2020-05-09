/* eslint-disable import/no-named-as-default */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PalettelistNavbar from './palettelistNavbar';
import Footer from './Footer';

export class palettelist extends Component {
  render() {
    const { palettes } = this.props;
    console.log(palettes);

    const mappedPalettes = palettes.map(palette => (
      <div className="Minibox" style={{ color: palette.colors }} key={palette.name}>
        <div className="MiniPalette-Title">
          <Link to={`/palette/${palette.id}`}>{palette.paletteName} </Link>
        </div>
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
        <PalettelistNavbar />
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

export default palettelist;
