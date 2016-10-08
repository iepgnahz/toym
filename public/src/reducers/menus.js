const menus = (state=[],action)=>{
  switch (action.type){
    case 'MENU_LOADED':
      return action.data;
    break;
  }
  return state;
};
export default menus;