const loadImage=(state={},action)=>{
  switch(action.type){
  case 'LOAD_IMAGE':
    return action.data;
  }
  return state;
};

export default loadImage;
