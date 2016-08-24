/**
 * Created by zhangpei on 16/8/23.
 */
import request from 'superagent';
var getUserMessageMiddleware = store => next => action => {
    switch (action.type){
      case 'USERMESSAGE_GETTED':
        request
            .get(`/menus/user/${action.userId}`)
            .end((err,res)=>{
              if(!err && res.ok){
                store.dispatch({
                  type:'USER_DISPLAYED',
                  data:res.body
                })
              }
            });
        break;
    }
   next(action)
};
export default getUserMessageMiddleware;