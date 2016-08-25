import React, {Component} from 'react'; // eslint-disable-line no-unused-vars
import Logo from '../components/Logo';
import MenuDetail from '../components/MenuDetail';
import {connect} from 'react-redux';
import {loadMenuDetail} from '../actions/index';
import Footer from './Footer';

class MenuDetailApp extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadPage(this.props.params.id);
  }

  render() {

    return (
        <div className="container">
          {/*<Logo/>*/}
          <MenuDetail menuItem={this.props.menuItem}/>
        </div>
    );
  }
}
var mapStateToProps = (state)=> {

  return state;
};

const mapDispatchToProps = (dispatch)=> ({

  getMenuDetail: (data)=> {
    dispatch(loadMenuDetail(data));
  },

  loadPage: (url)=>{
    dispatch({
      type:'INIT_MENUDETAIL',
      url
    });
  }
});
var MenuDetailPackage = connect(mapStateToProps, mapDispatchToProps)(MenuDetailApp);
export default MenuDetailPackage;
