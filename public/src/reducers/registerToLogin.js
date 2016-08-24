/**
 * Created by zhangpei on 16/8/22.
 */
var  registerToLogin= function (state=false,action) {
  switch (action.type){
    case 'REGISTER_TO_LOGIN':
      return action.isPromised;
    case 'RESET_REGISTER':
      return action.isPromised;
  }
  return false;
};
export default registerToLogin;