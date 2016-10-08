export const menuLoaded = (data)=>({
  type:'MENU_LOADED',
  data
});

export const loadMenuDetail = (data)=>{
  return {
    type:'MENUDETAIL_LOADED',
    data
  }
};

export const loadUserMessage = ()=>{
  return {
    type:'USERMESSAGE_LOADED'
  }
};