import React,{Component} from 'react';
import {Link} from 'react-router';
import Footer from './Footer';
class AppRoot extends Component{
  render(){
    return (
        <div className="appRoot">
          <p>我是一个导航</p>
          {this.props.children}
          <div className="clearfix"></div>
          <Footer/>
        </div>
    );
  }
}
export default AppRoot;