/**
 * Created by zhangpei on 16/8/22.
 */
import mongoose from 'mongoose';

var Sessions = mongoose.model('Sessions',{
  username:String,
  password:String,
  randomId:String
});

export default Sessions;