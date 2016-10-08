//用superagent发送请求
import require from 'superagent';

const menuLoadedMiddleware = store=>next=>action=>{
  switch(action.type){
    case 'INIT':
     require.get('/menus')
         .end((err,res)=>{
           next({
             type:'MENU_LOADED',
             data:res.body
           })
         });
      break;
  }
  next(action);
};
export default menuLoadedMiddleware;