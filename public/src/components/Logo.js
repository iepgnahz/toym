import React, {Component} from 'react';// eslint-disable-line no-unused-vars

class Logo extends Component {

  render() {
    return (
        <div id="header" className="grid-clear food-body">
          <div className="grid" id="logo">
            <a href="#" className="settings-text">
              Cook In My Life
            </a>
          </div>
          <div className="grid main-menu-block">
            <ul id="main-menu">
              <li><a href="#" className="settings-txt">Home</a></li>
              <li><a href="#" className="settings-txt">About ME</a></li>
              <li><a href="#" className="settings-txt">Menus</a></li>
              <li><a href="#" className="settings-txt">Upload</a></li>
              <li><a href="#" className="settings-txt">Log In</a></li>
              <li><a href="#" className="settings-txt">Register</a></li>
            </ul>
          </div>
        </div>
    );
  }
}

export default Logo;