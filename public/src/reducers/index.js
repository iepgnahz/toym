import {combineReducers} from 'redux';
import menu from './menu';
import menuItem from './menuItem';
import materialUploaded from './materialUploaded';
import loadImage from './uploadImage';
import resultJump from './resultJump';

const resultList = combineReducers({
  menu,
  menuItem,
  materialUploaded,
  loadImage,
  resultJump
});

export default resultList;
