const menudetails = (state={},action)=>{
  switch(action.type){
    case 'MENUDETAIL_LOADED':
      return action.data;
  }
  return state;
};
export default menudetails;