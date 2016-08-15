import React, {Component} from 'react';// eslint-disable-line no-unused-vars
import Logo from './Logo';
import MenuList from '../container/MenuList';
class App extends Component {
  render() {
    return (
        <div>
          <Logo/>
          <MenuList/>
        </div>
    );
  }
}

export default App;
