import React, {Component} from 'react';// eslint-disable-line no-unused-vars

class Logo extends Component {

  render() {


    return (
        <div className="food-body">
          <nav className="navbar navbar-default" role="navigation">
            <div className="row">
              <div className="collapse navbar-collapse col-md-6" id="bs-example-navbar-collapse-1">
                <div className="navbar-header">
                  <img src="../../image/logo.jpg"/>
                </div>
                <div>
                  <ul className="nav navbar-nav  ">
                    <li><a href="#">首页</a></li>
                    <li><a href="#">菜品动态</a></li>
                    <li><a href="#">上传菜谱</a></li>
                    <li><a href="#">个人中心</a></li>
                  </ul>
                 </div>
                 <div style={{float:'right',marginRight:'5%'}}>
                  <ul className="nav navbar-nav  ">
                    <li><a href="#">登录</a></li>
                    <li><a href="#">注册</a></li>
                  </ul>
                 </div>
              </div>
              </div>
          </nav>
        </div>
    );
  }
}

export default Logo;