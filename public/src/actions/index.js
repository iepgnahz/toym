import request from 'superagent';

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


export const sendMessage = (data)=>{
  return {
    type:'MESSAGE_SENDED',
    data
  }
};

export const sendRegisterMessage = (data)=>{
  return {
    type:'REGISTERMESSAGE_SENDED',
    data
  }
};

export const requestUserMessage = ()=>{
  return {
    type:"REQUEST_USERMESSAGE"
  }
};

export const requestUserCenterMessage = ()=>{
  return {
    type:"REQUEST_USERCENTERMESSAGE"
  }
};

export const receiveUserMessage = (isCompleted,username)=>{
  return {
    type:"RECEIVE_USERMESSAGE",
    isCompleted,
    username
  }
};

export const receiveUserCenterMessage = (isCompleted,username)=>{
  return {
    type:"RECEIVE_USERCENTERMESSAGE",
    isCompleted,
    username
  }
};

export const showRegisterErr = (err)=>{
   return {
     type: 'REGISTERERR_SHOWED',
     err
   }
};


export const confirmUserMessage = ()=>{
  return (dispatch)=>{
    dispatch(requestUserMessage());

    request
        .get('/menus/confirmUpload')
        .end((err,res)=>{
          if(res.status === 200){
            dispatch(receiveUserMessage(true,res.text));
          } else {
            dispatch({
              type:'PAGE_REDIRECTED',
              isJumped:true
            })
          }
        })
  }
};

export const getUserCenterMessage = ()=>{
  return (dispatch)=>{
    dispatch(requestUserCenterMessage());
    request
        .get('/menus/confirmUserCenter')
        .end((err,res)=>{
          if(res.text !== ''){
            dispatch(receiveUserCenterMessage(true,res.text));
          }else{
            dispatch({
              type:'USERCENTERPAGE_REDIRECTED',
              isJumped:true
            })
          }
        })
  }
};


export const loginErrShowed = (err)=>{
  return {
    type:'LOGINUSERERR_SHOWED',
    err
  }
}

export const resetLoginState = ()=>{
  return {
    type:'RESET_STATE',
    data:{}
  }
};


export const resetUserCenter = ()=>{
  return {
    type:'RESET_USERCENTERINTRO_STATE'
  }
};

export const getUserMessage = (userId)=>{
  return {
    type:'USERMESSAGE_GETTED',
    userId
  }
};

export const getUserWorks = (userId)=>{
  return {
    type:'USERWORKS_GETTED',
    userId
  }
};

export const  resetRegister = ()=>{
  return {
    type:'RESET_REGISTER',
    isPromised:false
  };
};





export const initHomePage=()=> {
  return {
    type: 'INIT_HOMEPAGE'
  };
};

export const UPLOAD_HOMEPAGE='UPLOAD_HOMEPAGE';
export const INIT_HOMEPAGE='INIT_HOMEPAGE';
export const MENUDETAIL_LOADED = 'MENUDETAIL_LOADED';
export const MENUS_LOADED = 'MENUS_LOADED';
export const ID_GETTER = 'ID_GETTER';