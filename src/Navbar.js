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
import './css/style.css';
import { Select, MenuItem } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { format: 'hex', open: false };
    this.handleFormatChange = this.handleFormatChange.bind(this);
    this.closeSnackbar = this.closeSnackbar.bind(this);
  }

  // / Here we handle the formatchange within the navbarcomponent,
  // / Based on what is set in the select component below, we set the state as event target value, the open state also plays in with the snackbar showing or not.
  handleFormatChange(e) {
    this.setState({ format: e.target.value, open: true });
    this.props.handleChange(e.target.value);
    console.log('This is the change', e.target.value);
    console.log(this.state);
  }

  closeSnackbar() {
    this.setState({ open: false });
  }

  render() {
    const { level, changeLevel, handleChange, showingAllColors, showingFrontpage, showingPalette } = this.props;
    const { format } = this.state;

    return (
      <header className="Navbar">
        <div className="logo">
          <Link to="/">ReactColorPicker Project</Link>
        </div>
        {/*         // Logic to show differnet pieces of the navbar based on which component you are in,
        props are passed as boolean values from the differnt components in question */}
        {showingAllColors && (
          <div className="slider-container">
            <span>Level: {level}</span>
            <div className="slider">
              <Slider defaultValue={level} min={100} max={900} step={100} onAfterChange={changeLevel} />
            </div>
          </div>
        )}
        {showingFrontpage && (
          <div className="select-container">
            <Select value={format} onChange={this.handleFormatChange}>
              <MenuItem value="hex">HEX - #ffffff</MenuItem>
              <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
              <MenuItem value="rgba">RGBA - rgba(255,255,255, 1.0)</MenuItem>
            </Select>
          </div>
        )}
        {showingPalette && (
          <div className="select-container">
            <Select value={format} onChange={this.handleFormatChange}>
              <MenuItem value="hex">HEX - #ffffff</MenuItem>
              <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
              <MenuItem value="rgba">RGBA - rgba(255,255,255, 1.0)</MenuItem>
            </Select>
          </div>
        )}
        {/*           // Snackbar component
         */}
        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          open={this.state.open}
          autoHideDuration={3000}
          message={<span id="message-id">Format Changed To {format.toUpperCase()}</span>}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          onClose={this.closeSnackbar}
          action={[
            <IconButton onClick={this.closeSnackbar} color="inherit" key="close" aria-label="close">
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </header>
    );
  }
}
export default Navbar;
