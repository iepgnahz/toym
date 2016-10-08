import React ,{Component} from 'react';
import {connect} from 'react-redux';

class Steps extends Component{
  rawMarkup(str) {

    if (str !== undefined) {
      var rawMarkup = marked((str).toString()); 
      return {__html: rawMarkup};
    }
  }
  render(){
    let steps = this.props.steps;
    return (
        <div>
          <h3>做法与步骤</h3>
          <div dangerouslySetInnerHTML={this.rawMarkup(steps)}></div>
        </div>
    )
  }
}
const mapStateToProps = (state)=>{
  return state.menudetails;
};
//经过connect 操作后组件才能获取数据
const StepsPackage = connect(mapStateToProps)(Steps);
export default StepsPackage;