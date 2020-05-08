/* eslint-disable react/button-has-type */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './component.scss';

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = { copied: false };
    this.changeCopyState = this.changeCopyState.bind(this);
  }

  changeCopyState() {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1500);
    });
  }

  render() {
    const { name, background } = this.props;
    const { copied } = this.state;
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div style={{ background }} className="ColorBox">
          {/* Set show if copied in state is true */}
          <div style={{ background }} className={`copy-overlay ${copied && 'show'}`} />
          {/* Set show if copied in state is true */}
          <div className={`copy-msg ${copied && 'show'}`}>
            <h1>copied!</h1>
            <p>{this.props.background}</p>
          </div>
          <div className="copy-container">
            <div className="box-content">
              <div>{name}</div>
            </div>
            <button className="copy-button">Copy</button>
          </div>
          <button className="see-more">More</button>
        </div>
      </CopyToClipboard>
    );
  }
}
export default ColorBox;
