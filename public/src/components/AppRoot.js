import React from 'react';
import Logo from './Logo';
import Footer from './Footer';
class AppRoot extends React.Component{
  render(){
    return (
        <div>
          <Logo/>
          {this.props.children}
          <Footer/>
        </div>
    );
  }
}
export default AppRoot;