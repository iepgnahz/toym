/**
 * Created by zhangpei on 16/8/23.
 */
const userCenterMessageLoaded = function (state={},action) {
  switch (action.type){
    case 'REQUEST_USERCENTERMESSAGE':
      return {
        isCompleted:false
      };
    case "RECEIVE_USERCENTERMESSAGE":
      return {
        isCompleted:action.isCompleted,
        username:action.username
      }
  }
  return state
};

export default  userCenterMessageLoaded;