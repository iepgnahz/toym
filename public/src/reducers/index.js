import {combineReducers} from 'redux';
import menu from './menu';
import menuItem from './menuItem';
import materialUploaded from './materialUploaded';
import loadImage from './uploadImage';
import resultJump from './resultJump';
import homePage from './homePage';
const resultList = combineReducers({
  menu,
  menuItem,
  materialUploaded,
  loadImage,
  resultJump,
  homePage
});

export default resultList;
