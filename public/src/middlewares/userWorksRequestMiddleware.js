/**
 * Created by zhangpei on 16/8/23.
 */
import request from 'superagent';
var userWorksRequestMiddleware = store => next => action =>{
  switch (action.type){
    case 'USERWORKS_GETTED':
        console.log('aaaa')
      request

          .get(`/menus/userWorks/${action.userId}`)
          .end((err,res)=>{
              if(res.ok && !err){
                store.dispatch({
                  type:'SELFWORKS_GETTED',
                  data:res.body
                })
              }
          });
      break;
  }
  next(action);

};
export default userWorksRequestMiddleware;