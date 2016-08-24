import React from 'react';
import Logo from './Logo';
class AppRoot extends React.Component{
  render(){
    return (
        <div>
          <Logo/>
          {this.props.children}
        </div>
    );
  }
}
export default AppRoot;