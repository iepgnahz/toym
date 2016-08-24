/**
 * Created by zhangpei on 16/8/20.
 */
import React, {Component} from 'react'; // eslint-disable-line no-unused-vars
import {sendMessage}  from '../actions/index';
import {withRouter,Link} from 'react-router';
import {connect}  from 'react-redux';
import {loginErrShowed} from '../actions/index';
import {resetLoginState} from '../actions/index';
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

        this.props.resetLogin();  //我一旦点击登录,页面重新渲染必然执行componentWillUpdate,所以会导致当你已经登录成功的时候,已经把isJUMPed设置为了true,会一直保持true的状态,所以又跳转到用户中心
        this.props.router.push(`/userCenter`);
      }
    }
  }

  focus(){
    this.props.loginUserErrShowedDis('');
  }

  render() {
    console.log(this.props.loginUserErrShowed);
    return (
        <div >
          <div >
          <h1 className = 'text-center'> 烹然心动 </h1>
          </div>
          <form id="homePage-form">
            <div className="form-group">
              <input type="text" className="form-control" id="exampleInputEmail1" placeholder="用户名" ref="username" onFocus={this.focus.bind(this)} />
            </div>
            <div className="form-group">
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="密码" ref="password" onFocus={this.focus.bind(this)}/>
              <span>{this.props.loginUserErrShowed}</span>
            </div>
            <button type="button" className="btn btn-success" onClick={this.click.bind(this)}>登 录</button>
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

  loginUserErrShowedDis: (err)=>{
    dispatch(loginErrShowed(err))
  },

  resetLogin: ()=>{
    dispatch(resetLoginState());
  }
});
var LoginPackage = connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));
export default LoginPackage;
