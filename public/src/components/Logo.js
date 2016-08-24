import React, {Component} from 'react';// eslint-disable-line no-unused-vars
import {Link} from 'react-router';

class Logo extends Component {

  render() {
    return (
        <div className="food-body">
          <nav className="navbar navbar-default" role="navigation">
            <div className="row" id="navbg">
              <div className="navbar-header">
                <img src="../../image/logo.jpg" />
              </div>
              <div>
                <ul className="nav navbar-nav">
                  <li><Link to="/">首页</Link></li>
                  <li><Link to="/menu">菜品动态</Link></li>
                  <li><Link to="/menuUpLoad">上传菜谱</Link></li>
                </ul>
              </div>
              <div style={{float: 'right', marginRight: '5%'}}>
                <ul className="nav navbar-nav">
                  <li><Link to="/in/login">登录</Link></li>
                  <li><Link to="/in/register">注册</Link></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
    );
  }
}

export default Logo;