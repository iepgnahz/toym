/**
 * Created by zhangpei on 16/8/21.
 */
import React, {Component} from 'react';// eslint-disable-line no-unused-vars
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import UserIntroduce  from '../components/UserIntroduce';
import {getUserCenterMessage} from '../actions/index';
import UserMenu from './UserMenu';
import {resetUserCenter} from '../actions/index';
class UserCenterApp extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getUserCenterMessage();
  }

  componentWillUpdate(nextProps) {
    console.log(nextProps.userCenterRedirectPage)

    if(nextProps.userCenterRedirectPage){
      // this.props.resetUserCenter();
      this.props.router.push('/in/login');

    }
  }
  render(){
    return (
        (this.props.userCenterMessageLoaded.username )?
        <div className="food-body">
          <UserIntroduce userId={this.props.userCenterMessageLoaded.username}/>
          <UserMenu userId={this.props.userCenterMessageLoaded.username}/>
        </div>:<h1>loading....</h1>
    )
  }
}
var mapStateToProps = (state)=> {
  return state;
};

const mapDispatchToProps = (dispatch)=> ({
  getUserCenterMessage: ()=>{
    dispatch(getUserCenterMessage())
  },
  resetUserCenter: ()=>{
    dispatch(resetUserCenter())
  }

});
var UserCenterAppPackage = connect(mapStateToProps, mapDispatchToProps)(withRouter(UserCenterApp));

export default UserCenterAppPackage