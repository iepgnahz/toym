import request from 'superagent';
//比如 要发异步的网络请求
import {loadMenuDetail} from '../actions/index';
const menuDetailLoadedMiddleware = store=>next=>action=>{
  switch(action.type){
    case 'INIT_MENUDETAIL':
        request.get(`/menus/${action.id}`)
            .end((err,res)=>{
              next(loadMenuDetail(res.body));
            });
      break;
  }
  next(action);
};
export default menuDetailLoadedMiddleware;