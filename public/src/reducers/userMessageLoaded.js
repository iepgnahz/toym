/**
 * Created by zhangpei on 16/8/21.
 */
const userMessageLoaded = function (state={},action) {
  switch (action.type){
    case 'REQUEST_USERMESSAGE':
      return {
      isCompleted:false
      };
    case "RECEIVE_USERMESSAGE":
      return {
        isCompleted:action.isCompleted,
        username:action.username
      }
  }
  return state
};

export default  userMessageLoaded;