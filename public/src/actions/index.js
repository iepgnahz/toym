export const menusLoader = (menuItems)=> ({
  type: MENUS_LOADED,
  menuItems
});

export const loadMenuDetail = (data)=> {
  return {
    type: MENUDETAIL_LOADED,
    data
  };
};


export const MENUDETAIL_LOADED = 'MENUDETAIL_LOADED';
export const MENUS_LOADED = 'MENUS_LOADED';
export const ID_GETTER = 'ID_GETTER';