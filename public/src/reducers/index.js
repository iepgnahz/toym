import {combineReducers} from 'redux';
import menu from './menu';
import menuItem from './menuItem';
import uploadMaterials from './uploadMaterials';

const resultList = combineReducers({
  menu,
  menuItem,
  uploadMaterials
});

export default resultList;
