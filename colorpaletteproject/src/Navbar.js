/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
// / The order here matters, we add the vendor css
// / and we override the default css. with our css.
// / THE ORDER MATTERS.
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';
import './component.scss';
import { Select, MenuItem } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { format: 'hex', open: false };
    this.handleFormatChange = this.handleFormatChange.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  handleFormatChange(e) {
    this.setState({ format: e.target.value, open: true });
    this.props.handleChange(e.target.value);
  }

  render() {
    const { level, changeLevel } = this.props;
    const { format } = this.state;

    return (
      <header className="Navbar">
        <div className="logo ">
          <Link exact to="/">
            <a className="rainbow rainbow_text_animated" href="#">
              ColorPaletteProject
            </a>
          </Link>
        </div>

        <div className="slider-container">
          <span>Level - {level} </span>
          <div className="slider">
            <Slider defaultValue={level} min={100} max={900} step={100} onAfterChange={changeLevel} />
          </div>
        </div>
        <div className="SelectContainer">
          {/* This.handleChange references the components
          constructor context the handlechange in this component
          specifically */}
          <Select value={format} onChange={this.handleFormatChange}>
            <MenuItem value="hex">HEX - #ffff</MenuItem>
            <MenuItem value="rgba">RGBA -RGBA(255.255.255.0)</MenuItem>
            <MenuItem value="rgb">RGB - RGB(255.255.255.0)</MenuItem>
          </Select>
        </div>
        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          open={this.state.open}
          autoHideDuration={3000}
          message={<span id="message-id">Format Changed To {format.toUpperCase()}</span>}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          onClose={this.handleClose}
          action={[
            <IconButton onClick={this.handleClose} color="inherit" key="close" aria-label="close">
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </header>
    );
  }
}

export default Navbar;
