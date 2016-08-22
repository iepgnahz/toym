import React,{Component} from 'react'
import Logo from './Logo';
class AppRoot extends Component{
  render(){
    return (
        <div>
          <Logo/>
          {this.props.children}
        </div>
    )
  }
}
export default AppRoot;