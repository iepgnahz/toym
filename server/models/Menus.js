import mongoose from 'mongoose';

const Menus = mongoose.model('Menus', {
  name: String,
  image:String,
  date:String,
  description:String
});

export default Menus;