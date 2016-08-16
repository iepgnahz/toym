import React,{Component} from 'react';// eslint-disable-line no-unused-vars

class Logo extends Component {
  render() {
    return (
        <div className="food-body">
          <nav className="navbar navbar-default" role="navigation">
            <div className="row">
              <div className="brand col-md-6">
                <a href="#" className="navbar-brand">
                  烹然心动
                </a>
              </div>
              <div className="collapse navbar-collapse col-md-6" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav  ">
                  <li className="active"><a href="#">首页</a></li>
                  <li><a href="#">菜品动态</a></li>
                  <li><a href="#">上传菜谱</a></li>
                  <li><a href="#">个人中心</a></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
    );
  }
}

export default Logo;