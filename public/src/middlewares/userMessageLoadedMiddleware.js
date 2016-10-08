import request from 'superagent';

const userMessageLoadedMiddleware = store=>next=>action=>{
  switch (action.type){
    case 'USERMESSAGE_LOADED':
      request.get('/menus/user/yujuan')
          .end((err,res)=>{
            next({
              type:'USERMESSAGE_GETTED',
              data:res.body
            })
          });
      break;
  }
  next(action);
};
export default userMessageLoadedMiddleware;
