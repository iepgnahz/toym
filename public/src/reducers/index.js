import { combineReducers } from 'redux';
import result from './result';
import people from './people';

const resultList = combineReducers({
  result,
  people
});

export default resultList;
