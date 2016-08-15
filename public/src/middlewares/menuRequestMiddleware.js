/*

 const peopleRequestMiddleware = (store)=> {
 (next)=> {
 (action)=> {

 }
 }
 };*/
import request from 'superagent';
const menuRequestMiddleware = store =>next=>action=> {// eslint-disable-line no-unused-vars
  switch (action.type) {
  case'INIT':
    request.get('/menus')
        .end((err,res)=>{
          next({
            type:'MENUS_LOADED',
            data:res.body
          });
            // console.log(res.body);
        });
    break;
  }
  next(action);
};

export default menuRequestMiddleware;