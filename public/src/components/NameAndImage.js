//每个组件 不要爸爸传参数，自己连接 state.menudetails数据
import React, {Component} from 'react';// eslint-disable-line no-unused-vars
import {connect} from 'react-redux';
class NameAndImage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
          <div className="row">
            <h1 className="text-left" style={{marginLeft:'2%'}}> {this.props.name}
            <small style={{float:'right',marginRight:'2%',marginTop:'3%'}}>上传时间:{this.props.date}</small></h1>
          </div>
          <div>
            <img src={'/'+this.props.image} className="text-center img-responsive form-control "
                 style={{height: 480}}/>
          </div>
          <h3>简介</h3>
          <p>{this.props.description}</p>
        </div>
    );
  }
}

var mapStateToProps = (state)=> {
  return state.menudetails;
};


var NameAndImagePackage = connect(mapStateToProps)(NameAndImage);

export default  NameAndImagePackage;