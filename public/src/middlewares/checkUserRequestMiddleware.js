/**
 * Created by zhangpei on 16/8/22.
 */
import request from 'superagent';
const checkUserRequestMiddleware = store => next => action =>{
  switch (action.type) {
    case 'REGISTERMESSAGE_SENDED':
      request
          .post('/menus/registerCheck')
          .send(action.data)
          .type('json')
          .end((err,res)=>{
            if(res.status === 200){
              alert(res.body.data + '! 您已经注册成功!请去登录');
              store.dispatch({
                type:'REGISTER_TO_LOGIN',
                isPromised:true
              })
            } else {
              store.dispatch({type:'REGISTERERR_SHOWED',
                err:res.body.err
              })
            }

          })

  }
  next(action);
};

export default checkUserRequestMiddleware;