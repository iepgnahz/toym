import request from 'superagent';

const todoRequestMiddleware = store=> next=> action=> {

  if (!action.type) {
    return next(action);
  }

  switch (action.type) {
  case 'ADD_TODO':
    request.post('/todos')
        .type('form')
        .send({
          text: action.text
        })
        .end(()=> {
          store.dispatch({
            type: 'INIT'
          });
        });
    break;
  case 'INIT':
    request.get('/todos')
        .end((err, res)=> {
          next({
            type: 'TODO_LOADED',
            data: res.body
          });
        });
    break;
  case 'DELETE_TODO':
    request.delete('/todos/' + action.id)
        .end(()=> {
          store.dispatch({
            type: 'INIT'
          });
        });
    break;

  }
  next(action);
};

export default todoRequestMiddleware;
