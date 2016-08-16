import { connect } from 'react-redux';
import Menu from '../components/Menu';


const mapStateToProps = (state) =>{
  return state;
};
const MenuList = connect(mapStateToProps)(Menu);

export default MenuList;
