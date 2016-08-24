import React, {Component} from 'react';// eslint-disable-line no-unused-vars
import {Link} from 'react-router';

class Logo extends Component {

  render() {
    return (
        <div id="header" className="grid-clear food-body">
          <div className="grid" id="logo">
            <a href=" " className="settings-text">
              Cook In My Life
            </a >
          </div>
          <div className="grid main-menu-block">
            <ul id="main-menu">
              <li className="settings-txt"><Link to="/">Home</Link></li>
              <li className="settings-txt"><Link to="/menu">Menus</Link></li>
              <li className="settings-txt"><Link to="/menuUpLoad">Upload</Link></li>
              <li className="settings-txt"><Link to="/userCenter">About ME</Link></li>
              <li className="settings-txt"><Link to="/in/login">Log In</Link></li>
              <li className="settings-txt"><Link to="/in/register">Register</Link></li>
            </ul>
          </div>
        </div>

    );
  }
}

// class Logo extends Component {
//
//   render() {
//     return (
//         <div id="header" className="grid-clear food-body">
//           <div className="grid" id="logo">
//             <a href=" " className="settings-text">
//               Cook In My Life
//             </a >
//           </div>
//           <div className="grid main-menu-block">
//             <ul id="main-menu">
//               <li className="settings-txt"><Link to="/homePage">Home</Link></li>
//               <li className="settings-txt"><Link to="/">About ME</Link></li>
//               <li className="settings-txt"><Link to="/menu">Menus</Link></li>
//               <li className="settings-txt"><Link to="/menuUpload">Upload</Link></li>
//               <li className="settings-txt"><Link to="/">Log In</Link></li>
//               <li className="settings-txt"><Link to="/">Register</Link></li>
//             </ul>
//           </div>
//         </div>
//     );
//   }
// }
//
// export default Logo;


export default Logo;