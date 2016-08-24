/**
 * Created by zhangpei on 16/8/23.
 */
const userDisplayed=(state={},action)=>{
  switch(action.type){
    case 'USER_DISPLAYED':
      return action.data;
  }
  return state;
};

export default userDisplayed;
