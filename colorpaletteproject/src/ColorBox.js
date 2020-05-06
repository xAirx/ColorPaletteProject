/* eslint-disable class-methods-use-this */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { CopyToClipboard } from "react-copy-to-clipboard";

export class ColorBox extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.handleCopy = this.handleCopy.bind(this);
  }

  handleCopy() {
    console.log('We copied something');
  }

  render() {
    const { name, background } = this.props;

    return (
      <CopyToClipboard text="{this.props.background}">
      <div style={{ background }} className="ColorBox">
        <div className="copy-container">
          <div className="box-content">
            <span>{name}</span>
          </div>
          <button type="button" className="copy-button" onClick={this.handleCopy}>
            Copy
          </button>
        </div>
        <span className="see-more">More</span>
      </div>
      </CopyToClipboard>
    );
  }
}

export default ColorBox;
