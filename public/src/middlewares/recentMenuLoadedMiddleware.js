//发 异步请求 要用到 中间件
import request from 'superagent';
const recentMenuLoadedMiddleware = store=>next=>action=>{
  switch (action.type){
    case 'INIT_RECENTMENU':
     request.get('/menus/homePage')
         .end((err,res)=>{
           next({
             type:'RECENTMENU_LOADED',
             data:res.body
           })
         });
      break;
  }
  next(action);
};

export default recentMenuLoadedMiddleware;