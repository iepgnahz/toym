import request from 'superagent';
import {UPLOAD_HOMEPAGE} from './../actions/index';

const homePageMiddleware=()=>next=>action=> {
  switch (action.type){
  case 'INIT_HOMEPAGE':
    request.get('/menus/homePage')
        .end((err, res) => {
          next({
            type: UPLOAD_HOMEPAGE,
            data: res.body
          });
        });
    break;
  }
  next(action);
};
export default homePageMiddleware;
