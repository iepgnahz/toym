/**
 * Created by zhangpei on 16/8/22.
 */
var loginUserErrShowed = function (state ='', action) {
  switch (action.type){
    case 'LOGINUSERERR_SHOWED':
      return action.err
  }
  return state
};

export default loginUserErrShowed