import React from 'react'; // eslint-disable-line no-unused-vars
import {render} from 'react-dom';
import App from './components/App';
import resultList from './reducers';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import menuRequestMiddleware from './middlewares/menuRequestMiddleware';
import menuDetailRequestMiddleware from './middlewares/menuDetailRequestMiddleware';
import MenuDetailPackage  from './components/MenuDetailApp';
import {Router, Route, browserHistory} from 'react-router';
import MenuUpLoadAppPackage from './components/MenuUpLoadApp';
import uploadRequestMiddleware from './middlewares/upLoadRequestMiddleware';
import HomePageList from './container/HomePageList';


import homePageMiddleware from './middlewares/homePageMiddleware';
const store = createStore(
    resultList,
    applyMiddleware(menuRequestMiddleware, menuDetailRequestMiddleware, uploadRequestMiddleware, homePageMiddleware)
);

store.dispatch({
  type: 'INIT'
});


render(
    <Provider store={store}>
      <Router history={browserHistory}>

          <Route path="/menu" component={App}/>
          <Route path='/menuDetail/:id' component={MenuDetailPackage}/>
          <Route path='/menuUpLoad' component={MenuUpLoadAppPackage}/>
          <Route path='homePage' component={HomePageList}/>
      </Router>
      
    </Provider>,
    document.getElementById('app')
);