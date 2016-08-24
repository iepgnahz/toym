/**
 * Created by zhangpei on 16/8/20.
 */
import mongoose from 'mongoose';

var Users = mongoose.model('Users',{
  username:String,
  password:String,
  tel:String
});

export default Users;