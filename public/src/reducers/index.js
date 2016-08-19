import {combineReducers} from 'redux';
import menu from './menu';
import menuItem from './menuItem';
import materialUploaded from './materialUploaded';

const resultList = combineReducers({
  menu,
  menuItem,
  materialUploaded
});

export default resultList;
