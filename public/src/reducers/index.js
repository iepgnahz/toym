import {combineReducers} from 'redux';
import menu from './menu';
import menuItem from './menuItem';
import materialUploaded from './materialUploaded';
import loadImage from './uploadImage';

const resultList = combineReducers({
  menu,
  menuItem,
  materialUploaded,
  loadImage
});

export default resultList;
