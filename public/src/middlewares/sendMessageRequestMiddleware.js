/**
 * Created by zhangpei on 16/8/21.
 */
import request from 'superagent';
const sendMessageRequestMiddleware = store => next => action =>{
  switch (action.type) {
    case 'MESSAGE_SENDED':
      request
          .post('/menus/loginTest')
          .send(action.data)
          .type('json')
          .end((err,res)=>{
            // if(res.text === '该用户不存在'){
            //   alert(res.text)
            // } else if(res.text === '密码不正确'){
            //   alert(res.text)
            // } else {
            //   store.dispatch({
            //     type:'USER_JUMPED',
            //     isJumped:true
            //   })
            // }
            if(res.status === 501){
              console.log('1234543')
              store.dispatch({
                type: 'LOGINUSERERR_SHOWED',
                err: res.body.err
              })
            }
            if(res.ok && !err){
              store.dispatch({
                type:'USER_JUMPED',
                data: {
                  isJumped: true,
                  username: res.body.data
                }//图上假数据
              })
            }
          })
  }
  next(action);
};

export default sendMessageRequestMiddleware;