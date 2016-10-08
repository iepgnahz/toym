import React from 'react'; // eslint-disable-line no-unused-vars
import {render} from 'react-dom';
import resultList from './reducers';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';


import {Router, Route,IndexRoute, browserHistory} from 'react-router';
import AppRoot from './components/AppRoot';
import MenuPackage from './components/Menus';
import MenuDetailAppPackage from './components/MenuDetailApp';
import HomePage from './components/HomePage';

//加载中间件
import menuLoadedMiddleware from './middlewares/menuLoadedMiddleware';
import menuDetailLoadedMiddleware from './middlewares/menuDetailLoadedMiddleware';
import recentMenuLoadedMiddleware from './middlewares/recentMenuLoadedMiddleware';
import userMessageLoadedMiddleware from './middlewares/userMessageLoadedMiddleware';
const store = createStore(
    resultList,
    applyMiddleware(menuLoadedMiddleware,menuDetailLoadedMiddleware,recentMenuLoadedMiddleware,userMessageLoadedMiddleware)
);

store.dispatch({
  type: 'INIT'
});

render(
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={AppRoot}>
          <IndexRoute component={HomePage}/>
          <Route path="/menu" component={MenuPackage}/>
          <Route path="/menuDetail/:id" component={MenuDetailAppPackage}/>
        </Route>
      </Router>
    </Provider>,
  document.getElementById('app')
);