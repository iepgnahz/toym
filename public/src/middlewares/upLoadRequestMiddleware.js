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
              alert('上传成功');
            }
          })
  }
  next(action);
};

///没写完

export default uploadRequestMiddleware;