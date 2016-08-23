/**
 * Created by zhangpei on 16/8/22.
 */
var loginUserErrshowed = function (state = '', action) {
  switch (action.type){
    case 'LOGINUSERERR_SHOWED':
      return action.err
  }
};

export default loginUserErrshowed