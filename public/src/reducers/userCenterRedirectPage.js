/**
 * Created by zhangpei on 16/8/23.
 */
var userCenterRedirectPage = function (state=false,action) {
  switch (action.type){
    case 'USERCENTERPAGE_REDIRECTED':
      return action.isJumped;
  }
  return false;
};
export default userCenterRedirectPage;