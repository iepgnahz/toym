/**
 * Created by jae on 16-8-13.
 */
import mongoose from 'mongoose';

const Menus = mongoose.model('Menus', {
  name: String,
  image:String
});

export default Menus;