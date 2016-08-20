import request from 'superagent';
import uploadMenu from '../actions/index';
const uploadRequestMiddleware = (store) => next => action => {
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
              store.dispatch({
                type:'JUMP_RESULT',
                data:true
              });
            }
          });
  }
  next(action);
};



export default uploadRequestMiddleware;