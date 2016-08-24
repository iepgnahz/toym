/**
 * Created by zhangpei on 16/8/21.
 */
var redirectPage = function (state=false,action) {
  switch (action.type){
    case 'PAGE_REDIRECTED':
      return action.isJumped;
  }
  return false;
};
export default redirectPage;