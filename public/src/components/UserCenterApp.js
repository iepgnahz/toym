import React, {Component} from 'react';// eslint-disable-line no-unused-vars
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import UserIntroduce  from '../components/UserIntroduce';
import {getUserCenterMessage} from '../actions/index';
import {resetUserCenter} from '../actions/index'
class UserCenterApp extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getUserCenterMessage();
  }

  componentWillUpdate(nextProps) {

    if (nextProps.userCenterRedirectPage) {
      this.props.router.push('/in/login');
      this.props.resetUserCenter();
    }
  }

  render() {
    return (
        <div className="food-body">
          <UserIntroduce userId={this.props.userCenterMessageLoaded.username}/>
        </div>
    )
  }
}
var mapStateToProps = (state)=> {
  return state;
};

const mapDispatchToProps = (dispatch)=> ({
  getUserCenterMessage: ()=> {
    dispatch(getUserCenterMessage())
  },

  resetUserCenter: ()=> {
  dispatch(resetUserCenter())
}

});
var UserCenterAppPackage = connect(mapStateToProps, mapDispatchToProps)(withRouter(UserCenterApp));

export default UserCenterAppPackage