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
      <div className="miniColor" style={{ color: palette.colors }} key={palette.name}>
        <Link to={`/palette/${palette.id}`}>
          <div className="minipalette-title">{palette.paletteName}</div>
          {palette.colors.map(singlecolor => (
            <div className="minibox" style={{ backgroundColor: singlecolor.color }}></div>
          ))}
        </Link>
      </div>
    ));

    /* console.log(mappedPalettes); */

    return (
      <div className="Palette">
        <PalettelistNavbar />
        <div className="palette-wrapper">
          {mappedPalettes}
          {/*  {palettes.map(palette => (
            <miniPalette {...palettes} />
          ))} */}
        </div>
        <Footer />
      </div>
    );
  }
}

export default palettelist;
