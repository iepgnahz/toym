/*

 const peopleRequestMiddleware = (store)=> {
 (next)=> {
 (action)=> {

 }
 }
 };*/
import request from 'superagent';
import {MENUS_LOADED} from '../actions/index';
const menuRequestMiddleware = store =>next=>action=> {// eslint-disable-line no-unused-vars
  switch (action.type) {
  case'INIT':
    request.get('/menus')
        .end((err, res)=> {
          next({
            type: MENUS_LOADED,
            data: res.body
          });

        });
    break;
  }
  next(action);
};

export default menuRequestMiddleware;