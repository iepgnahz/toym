import React, {Component} from 'react';// eslint-disable-line no-unused-vars
import {Link} from 'react-router';
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
              <li className="settings-txt"><Link to="/homePage">Home</Link></li>
              <li className="settings-txt"><Link to="/">About ME</Link></li>
              <li className="settings-txt"><Link to="/menu">Menus</Link></li>
              <li className="settings-txt"><Link to="/menuUpload">Upload</Link></li>
              <li className="settings-txt"><Link to="/">Log In</Link></li>
              <li className="settings-txt"><Link to="/">Register</Link></li>
            </ul>
          </div>
        </div>
    );
  }
}

export default Logo;























// import React, {Component} from 'react';// eslint-disable-line no-unused-vars
// import {Link} from 'react-router';
// class Logo extends Component {
//
//   render() {
//     return (
//         <div className="food-body" id="logos">
//           <nav className="navbar" role="navigation">
//             <div className="row">
//               <div style={{marginLeft:'2%'}} className="nav navbar-header">
//                 <img src="../../image/logo.jpg" className="img-circle"></img>
//               </div>
//                <div>
//                 <ul className="nav navbar-nav nav-pills">
//                   <li><Link to="/homePage">首页</Link></li>
//                   <li><Link to="/menuUpLoad">上传菜谱</Link></li>
//                   <li><Link to="/menu">菜品动态</Link></li>
//                 </ul>
//               </div>
//               <div style={{float: 'right'}}>
//                 <ul className="nav navbar-nav nav-pills">
//                   <li><a href="#">登录</a></li>
//                   <li><a href="#">注册</a></li>
//                 </ul>
//               </div>
//             </div>
//           </nav>
//         </div>
//     );
//   }
// }
//
// export default Logo;