import {connect} from 'react-redux';
import Menu from '../components/Menu';
import {getItemId} from '../actions/index';


const mapStateToProps = (state) => {
  return state;
};


const mapDispatchToProps = (dispatch)=> ({
  getId: (id)=> {

    dispatch(getItemId(id));
  }
});
const MenuList = connect(mapStateToProps, mapDispatchToProps)(Menu);

export default MenuList;
