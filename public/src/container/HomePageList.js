import {connect} from 'react-redux';
import HomePageShowings from '../components/HomePageShowings';
import {initHomePage} from './../actions/index';
const mapStateToProps=(state) =>{
  return state;
};

const mapDispatchToProps=(dispatch)=>({
  init_HomePage:()=>{
    dispatch(initHomePage());
  }
});
const HomePageList=connect(mapStateToProps,mapDispatchToProps)(HomePageShowings);

export default HomePageList;