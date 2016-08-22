import React, {Component} from 'react';// eslint-disable-line no-unused-vars
import {Link} from 'react-router';
class Logo extends Component {

  render() {
    return (
        <div className="food-body">
          <nav className="navbar navbar-default" role="navigation">
            <div className="row" id="navbg">
              <div className="navbar-header">
                <img src="../../image/logo.jpg"></img>
              </div>
              <div>
                <ul className="nav navbar-nav">
                  <li><Link to="/homePage">首页</Link></li>
                  <li><Link to="/menuUpLoad">上传菜谱</Link></li>
                  <li><Link to="/menu">菜品动态</Link></li>
                </ul>
              </div>
              <div style={{float: 'right', marginRight: '5%'}}>
                <ul className="nav navbar-nav">
                  <li><a href="#">登录</a></li>
                  <li><a href="#">注册</a></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
    );
  }
}

export default Logo;