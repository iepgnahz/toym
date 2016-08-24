import {UPLOAD_HOMEPAGE}from './../actions/index';

const homePage=(state=[],action)=>{
  switch (action.type){
  case UPLOAD_HOMEPAGE:
    return action.data;
  }
  return state;
};
export default homePage;