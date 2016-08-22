import request from 'superagent';
import {ID_GETTER} from '../actions/index';
import {loadMenuDetail} from '../actions/index';


var menuDetailRequestMiddleware = store => next => action => {
  switch (action.type) {
  case  ID_GETTER:
    request
        .get(`/menus/${action.id}`)
        .end((err, res)=> {
          next(loadMenuDetail(res.body));
        });
    break;
  case 'INIT_MENUDETAIL':
    request
          .get(`/menus/${action.url}`)
          .end((err, res)=> {
            store.dispatch(loadMenuDetail(res.body));
          });
    break;
  }

  next(action);
};

export default menuDetailRequestMiddleware;