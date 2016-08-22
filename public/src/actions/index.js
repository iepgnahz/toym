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

export const addMaterial = (data)=> ({
  type: 'ADD_MATERIAL',
  data
});

export const deleteMaterial = (id) => ({
  type: 'DELETE_MATERIAL',
  id
});
export const loadHomePage = (data) =>({
  type:'UPLOAD_HOMEPAGE',
  data
}
    
);

export const getItemId = (id) => ({
  type:'ID_GETTER',
  id
});

export const uploadMenu = (data) =>{
  return {
    type:'UPLOAD_MENU',
    data
  };
};

export const fetchImage=(file)=>{
  return {
    type:'LOAD_IMAGE',
    data:{file:file}
  };
};
export const initHomePage=()=> {
  return {
    type: 'INIT_HOMEPAGE'
  };


};

export const MENUDETAIL_LOADED = 'MENUDETAIL_LOADED';
export const MENUS_LOADED = 'MENUS_LOADED';
export const ID_GETTER = 'ID_GETTER';
export const UPLOAD_HOMEPAGE='UPLOAD_HOMEPAGE';
export const INIT_HOMEPAGE='INIT_HOMEPAGE';