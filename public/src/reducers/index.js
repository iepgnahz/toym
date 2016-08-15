import { combineReducers } from 'redux';
import result from './result';
import people from './people';

const resultList = combineReducers({
  result,
  people
});

export default resultList;
/*
const reducer = combineReducers({
  a: doSomethingWithA,
  b: processB,
  c: c
})
或是：
function reducer(state = {}, action) {
  return {
    a: doSomethingWithA(state.a, action),
    b: processB(state.b, action),
    c: c(state.c, action)
  }
}*/
