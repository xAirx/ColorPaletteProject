/* eslint-disable import/no-unresolved */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import './component.scss';

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = { copied: false };
    this.changeCopyState = this.changeCopyState.bind(this);
  }

  // Here we change the state of the copying functionality, this is called as soon as we copy button is clicked, and onCopy is triggered
  changeCopyState() {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1500);
    });
  }

  render() {
    const { name, background, moreUrl, showLink } = this.props;
    const { copied } = this.state;
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div style={{ background }} className="ColorBox">
          {/* /// Conditional evaluation wether to show the copied overlay, based on if the state of copied in state is true.
          /// here we add a class of show if its true, same for copy-msg. */}
          <div style={{ background }} className={`copy-overlay ${copied && 'show'}`} />
          <div className={`copy-msg ${copied && 'show'}`}>
            <h1>copied!</h1>
            <p>{this.props.background}</p>
          </div>

          <div className="copy-container">
            <div className="box-content">
              <span>{name}</span>
            </div>
            <button className="copy-button">Copy</button>
          </div>
          {/*   // Here we are evaluating on a prop which is passed down from our singlecolorpalette,
          // We need to contro l whihc button is shown in the colorboxes, we use colorboxes to generate
          // the singlecolorboxes and the standard palette colorboxes.
          // showlink is evaluatted and will not show more in the singleColorPalette component instead
          // the back button is shown. */}
          {showLink && (
            // The more url passed from palette.js is used here as a quick way to set a route through props.
            <Link to={moreUrl} onClick={e => e.stopPropagation()}>
              <span className="see-more">More</span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}
export default ColorBox;
