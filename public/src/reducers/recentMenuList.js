const recentMenuList = (state=[],action)=>{
  switch(action.type){
    case 'RECENTMENU_LOADED':
      return action.data;
  }
  return state;
};

export default recentMenuList;