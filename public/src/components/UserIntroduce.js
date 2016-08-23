/**
 * Created by zhangpei on 16/8/23.
 */
import React, {Component} from 'react';// eslint-disable-line no-unused-vars
import {connect} from 'react-redux';
import {getUserMessage} from '../actions/index';
import {Link} from 'react-router';
class UserIntroduce extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getUserCenterMessage(this.props.userId);
  }


  render() {
    let userMessage = this.props.userDisplayed || {username:'',tel:''}
    return (
        <div>
    <div className="container">
      <img src="/image/user.jpg" className="col-md-2" style={{height:'170px'}}/>
      <div className="col-md-2">
        用户名:<div className="alert alert-info" role="alert" >{userMessage.username}
        </div>
        电话号码:<div className="alert alert-info" role="alert">{userMessage.tel}
        </div>
      </div>
      <Link to='/menuUpLoad'>上传菜谱</Link>
    </div>
          <hr />
          <h2 >作品展示</h2>
          </div>
    )
  }

}

const mapStateToProps = (state)=> (state);
const mapDispatchToProps = (dispatch)=> ({
  getUserCenterMessage: (userId)=> {
    dispatch(getUserMessage(userId));
  }
});

var UserIntroducePackage = connect(mapStateToProps,mapDispatchToProps)(UserIntroduce);
export default UserIntroducePackage;