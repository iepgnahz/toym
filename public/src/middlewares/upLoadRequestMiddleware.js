import request from 'superagent';
const uploadRequestMiddleware = store => next => action => {
  switch (action.type) {
  case 'UPLOAD_MENU':
    request
          .post('/menus')
          .send(action.data)
          .type('json')
          .end((err,res)=>{
            if(res.text.trim() === 'fail'){
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