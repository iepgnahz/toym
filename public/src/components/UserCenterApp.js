import React, {Component} from 'react';// eslint-disable-line no-unused-vars
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import UserIntroduce  from '../components/UserIntroduce';
import {getUserCenterMessage} from '../actions/index';
import UserMenu from './UserMenu';
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
    }
  }

  render() {
    return (
        <div className="food-body">
          <UserIntroduce userId={this.props.params.userId}/>
          <UserMenu userId={this.props.params.userId}/>
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
  }

});
var UserCenterAppPackage = connect(mapStateToProps, mapDispatchToProps)(withRouter(UserCenterApp));

export default UserCenterAppPackage