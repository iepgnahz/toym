import React from 'react'; // eslint-disable-line no-unused-vars
import {render} from 'react-dom';
import App from './components/App';
import resultList from './reducers';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import menuRequestMiddleware from './middlewares/menuRequestMiddleware';
import MenuDetailPackage  from './components/MenuDetailApp';
import {Router, Route, browserHistory} from 'react-router';
import MenuUpLoadApp from './components/MenuUpLoadApp';


const store = createStore(
    resultList,
    applyMiddleware(menuRequestMiddleware)
);

store.dispatch({
  type: 'INIT'
});


render(
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/menu" component={App}/>
        <Route path='/menuDetail/:id' component={MenuDetailPackage}/>
        <Route path='/menuUpLoad'   component={MenuUpLoadApp}/>
      </Router>
    </Provider>,
    document.getElementById('app')
);