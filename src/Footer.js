import React, { Component } from 'react';
import './css/style.css';

export class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="Footerlogo ">
          <a className="rainbow rainbow_text_animated" href="#">
            Production by [M:W]
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
