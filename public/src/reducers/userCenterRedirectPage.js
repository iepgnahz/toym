/**
 * Created by zhangpei on 16/8/23.
 */
var userCenterRedirectPage = function (state=false,action) {
  switch (action.type){
    case 'USERCENTERPAGE_REDIRECTED':
      console.log('aaaa')
      return action.isJumped;
    case 'RESET_USERCENTERINTRO_STATE':
      console.log('res')
        return false;
  }
  return false;
};
export default userCenterRedirectPage;