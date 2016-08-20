/**
 * Created by zhangpei on 16/8/19.
 */
import request from 'superagent';
import uploadMenu from '../actions/index';
const uploadRequestMiddleware = store => next => action => {
  switch (action.type) {
    case 'UPLOAD_MENU':
      request
          .post('/menus')
          .send(action.data)
          .type('form')
          .end((err,res)=>{
            if(res.body){
              alert('上传失败')
            } else {
              store.dispatch({
                type:'JUMP_RESULT',
                data:true
              })
            }
          })
  }
  next(action);
};



export default uploadRequestMiddleware;