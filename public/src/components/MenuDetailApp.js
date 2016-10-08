import React, {Component} from 'react';
import {connect} from 'react-redux';
import NameAndImagePackage from './NameAndImage';
import MaterialListPackage from './MaterialList';
import Steps from './Steps';

class MenuDetailApp extends Component {
  componentDidMount() {
    this.props.getMenuItemId(this.props.params.id);
  }

  render() {
    return (
        <div className="food-body">
          <NameAndImagePackage/>
          <MaterialListPackage/>
          <Steps/>
        </div>
    )
  }
}
const mapStateToProps = (state)=> {
  return state.menudetails;
};

const mapDispatchToProps = (dispatch)=>({
  getMenuItemId: (id)=> {
    dispatch({
      type: 'INIT_MENUDETAIL',
      id
    })
  }
});
const MenuDetailAppPackage = connect(mapStateToProps, mapDispatchToProps)(MenuDetailApp);
export default MenuDetailAppPackage;