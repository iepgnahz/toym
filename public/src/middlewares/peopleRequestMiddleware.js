/*

 const peopleRequestMiddleware = (store)=> {
 (next)=> {
 (action)=> {

 }
 }
 };*/
import request from 'superagent';
const peopleRequestMiddleware = store =>next=>action=> {// eslint-disable-line no-unused-vars
  switch (action.type) {
  case'INIT':
    // console.log("+++++++++++++++++");
    request.get('/people')
        .end((err,res)=>{
          next({
            type:'PEOPLE_LOADED',
            data:res.body
          });
            // console.log(res.body);
        });
    break;
  }
  next(action);
};

export default peopleRequestMiddleware;