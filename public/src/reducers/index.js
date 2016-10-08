import { combineReducers } from 'redux';

import menus from './menus';
import  menudetails from './menudetails';
import recentMenuList from './recentMenuList';

const resultList = combineReducers({
    menus,
    menudetails,
    recentMenuList
});

export default resultList;
