import {combineReducers} from 'redux';
import menu from './menu';
import menuItem from './menuItem';
const resultList = combineReducers({
  menu,
  menuItem
});

export default resultList;
