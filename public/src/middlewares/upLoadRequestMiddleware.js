import request from 'superagent';
const uploadRequestMiddleware = store => next => action => {
  switch (action.type) {
  case 'UPLOAD_MENU':
    console.log(action.data)
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