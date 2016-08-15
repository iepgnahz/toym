/**
 * Created by jae on 16-8-13.
 */
const menu=(state=[],action)=>{
  switch (action.type){
  case'MENUS_LOADED':
    return action.data;
  }
  return state;
};
export default menu;