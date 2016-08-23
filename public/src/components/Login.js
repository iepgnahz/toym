/**
 * Created by zhangpei on 16/8/20.
 */
import React, {Component} from 'react'; // eslint-disable-line no-unused-vars
import {sendMessage}  from '../actions/index';
import {withRouter,Link} from 'react-router';
import {connect}  from 'react-redux';
import {loginErrShowed} from '../actions/index';
class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  click(){

    var username = this.refs.username.value.trim();
    var password = this.refs.password.value.trim();
    this.props.sendMessage({username: username, password: password});
    this.refs.username.value = '';
    this.refs.password.value = '';
  }

  componentWillUpdate(nextProps) {

    if(nextProps.loginJumped) {
      if(nextProps.loginJumped.isJumped) {
        this.props.router.push(`/userCenter/${nextProps.loginJumped.username}`);
      }
    }
  }

  focus(){
    this.props.loginUserErrShowed('');
  }

  render() {
    return (
        <div className=" row col-xs-offset-4 col-xs-4 text-center">
          <div className="page-header">
          <h1 className = 'text-center'> 烹然心动 </h1>
          </div>
          <form>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">用户名 : </label>
              <input type="text" className="form-control" id="exampleInputEmail1" placeholder="用户名" ref="username" onFocus={this.focus.bind(this)} />
            </div>
            <div className="form-group">
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="密码" ref="password" onFocus={this.focus.bind(this)}/>
              <p>{this.props.loginUserErrShowed}</p>
            </div>
            <button type="button" className="btn btn-default" onClick={this.click.bind(this)}>登 录</button>
            <button type="button" className="btn btn-default" ><Link to="/register">注 册</Link></button>
          </form>
        </div>
    )
  }
}


var mapStateToProps = (state)=> {

  return state;
};

const mapDispatchToProps = (dispatch)=> ({

  sendMessage: (data)=> {
    dispatch(sendMessage(data));
  },

  loginUserErrShowed: (err)=>{
    dispatch(loginErrShowed(err))
  }
});
var LoginPackage = connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));
export default LoginPackage;
