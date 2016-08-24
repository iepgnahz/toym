/**
 * Created by zhangpei on 16/8/22.
 */
var registerErrShowed = function (state='',action) {
  switch (action.type){
    case 'REGISTERERR_SHOWED':
      return action.err
  }
 return state
};

export default registerErrShowed;