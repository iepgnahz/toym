import React, {Component} from 'react';// eslint-disable-line no-unused-vars
//import AddTodo from '../container/AddTodo';
//import ResultList from './ResultList';
import Logo from './Logo';
import PeopleList from '../container/PeopleList';
class App extends Component {
  render() {
    return (
        <div>
          <Logo/>
          <PeopleList/>
        </div>
    );
  }
}

export default App;
