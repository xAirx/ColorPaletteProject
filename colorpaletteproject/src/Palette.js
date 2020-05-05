/* eslint-disable react/prop-types */
/* eslint-disable import/no-named-as-default */
import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './ColorBox.css';
import './Palette.css';

export class Palette extends Component {
  render() {
    const { colors } = this.props;
    /* eslint-disable no-unused-expressions */
    /* eslint-disable array-callback-return */
    /* const colorBoxes = this.props.colors.map(color => {
             <ColorBox background={color.color} name={color.name}/>
        }) */

    const colorBoxes = colors.map(function(color) {
      return <ColorBox background={color.color} name={color.name} />;
    });

    return (
      <div className="Palette">
        {/*  navbar goes here */}
        <div className="Palette-colors">
          {/* bunch of color boxes */}
          {/* colorBoxes */}
          {colorBoxes}
        </div>
        {/* Footer eventually */}
      </div>
    );
  }
}

export default Palette;
