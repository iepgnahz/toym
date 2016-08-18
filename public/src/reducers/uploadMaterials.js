/**
 * Created by zhangpei on 16/8/18.
 */
const uploadMaterials = (state = [], action)=> {

  switch (action.type) {
    case 'ADD_MATERIAL':
      return [
        ...state,
        action.data
      ];
      break;
    case 'DELETE_MATERIAL':
      return state.filter((v,k)=>{
        return k !== action.id;
      });
    case 'INIT':
      return state;
  }
  return state;
};

export default uploadMaterials;