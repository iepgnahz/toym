/**
 * Created by zhangpei on 16/8/20.
 */
var resultJump = function (state=false,action) {
  switch (action.type){
  case 'JUMP_RESULT':
    return action.data;
  }
  return false;
};
export default resultJump;