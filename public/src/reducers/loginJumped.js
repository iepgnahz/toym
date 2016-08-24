
var loginJumped = function (state={},action) {
  switch (action.type){
    case 'USER_JUMPED':
      return action.data;
    case 'RESET_STATE':
      return action.data;
  }
  return state;
};
export default loginJumped;