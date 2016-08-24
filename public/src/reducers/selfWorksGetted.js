/**
 * Created by zhangpei on 16/8/23.
 */
var selfWorksGetted = (state=[],action) =>{
  switch (action.type){
    case 'SELFWORKS_GETTED':
      return action.data
  }
  return state;
};

export default selfWorksGetted;