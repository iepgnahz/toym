import request from 'superagent';
import uploadMenu from '../actions/index';
const uploadRequestMiddleware = () => next => action => {
  switch (action.type) {
  case uploadMenu:
    request
          .post('/menus')
          .send(action.data)
          .type('form')
          .end((err,res)=>{
            if(res.body){
              alert('上传失败');
            } else {
              alert('上传成功');
            }
          });
  }
  next(action);
};

///没写完

export default uploadRequestMiddleware;