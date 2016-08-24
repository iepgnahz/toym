/**
 * Created by zhangpei on 16/8/23.
 */
import React, {Component} from 'react';// eslint-disable-line no-unused-vars
import {connect} from 'react-redux';
import {getUserMessage} from '../actions/index';
import {getUserWorks} from '../actions/index'
import UserMenuItem from './UserMenuItem';
import {Link} from 'react-router';
class UserIntroduce extends Component {
  constructor(props) {
    super(props);
  }
  
  componentWillUpdate(nextProps){
      console.log('render'+this.props.userCenterMessageLoaded.username)
    if(nextProps.userCenterMessageLoaded.username){
      this.props.getUserCenterMessage(nextProps.userCenterMessageLoaded.username);
      this.props.getUserWorks(nextProps.userCenterMessageLoaded.username);
      this.props.resetUserCenter();
    }
  }


  render() {

    let userMenu = this.props.selfWorksGetted || [];
    let userMessage = this.props.userDisplayed || {username: '', tel: ''};

    return (

        <div >
          <div className="container">
            <div className="col-md-2 text-center">
              <img src="/image/user.jpg" style={{width:'170px',height:'170px'}}/>

              <p style={{marginTop:'10px',fontSize:'20px'}}><Link to='/menuUpLoad'>上传菜谱</Link></p>
            </div >
            <div className="col-md-2">
              用户名:
              <div className="alert alert-info" role="alert">{userMessage.username}
              </div>
              电话号码:
              <div className="alert alert-info" role="alert">{userMessage.tel}
              </div>
            </div>
          </div>
          <hr />
          <h2 >作品展示</h2>

          <div className="row">
            {
              userMenu.map((v, k)=> (
                  <UserMenuItem id={v._id} key={k} name={v.name} image={v.image} date={v.date} description={v.description}
                  />
              ))
            }
          </div>

        </div>
    )
  }

}

const mapStateToProps = (state)=> (state);
const mapDispatchToProps = (dispatch)=> ({
  getUserCenterMessage: (userId)=> {
    dispatch(getUserMessage(userId));
  },
  getUserWorks: (userId)=> {
    dispatch(getUserWorks(userId));
  },
  resetUserCenter : () => {
    dispatch({type:'REAET_USERINTRO'})
  }
});

var UserIntroducePackage = connect(mapStateToProps, mapDispatchToProps)(UserIntroduce);
export default UserIntroducePackage;