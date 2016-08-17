/**
 * Created by zhangpei on 16/8/16.
 */
import {MENUDETAIL_LOADED} from '../actions/index';
var menuItem = function (state = {}, action) {
  switch (action.type) {
  case MENUDETAIL_LOADED:
    return action.data;
  }
  return state;
};
export default menuItem;