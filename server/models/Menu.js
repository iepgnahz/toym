import mongoose from 'mongoose';

const Menu= mongoose.model('Menu',{
  username:String,
  phone:String,
  regtime:String,
  name:String,
  image:String,
  description:String,
  date:String,
  materials:Array,
  steps:String
});

export default Menu;