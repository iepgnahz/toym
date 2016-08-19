/**
 * Created by zhangpei on 16/8/19.
 */
const loadImage=(state={},action)=>{
  switch(action.type){
    case 'LOAD_IMAGE':
      return action.data;
  }
  return state;
};

export default loadImage;
