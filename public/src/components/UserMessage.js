import React ,{Component} from 'react';
import {loadUserMessage} from '../actions/index';

class UserMessage extends Component{
  componentDidMount(){
    this.props.getUserMessage();
  }
  render(){
    return (
        <div>
          
        </div>
    )
  }
}
const mapStateToProps = (state)=>{
  return state;
};
const mapDispatchToProps = (dispatch)=>({
  getUserMessage:()=>{
    dispatch(loadUserMessage());
  }
});
export default UserMessage;