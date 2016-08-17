/**
 * Created by zhangpei on 16/8/16.
 */
import React, {Component} from 'react';// eslint-disable-line no-unused-vars
import {connect} from 'react-redux';
class NameAndImage extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
        <div>
          <h1 className="row"> {this.props.name}
            <small className="col-sm-offset-7">上传时间:{this.props.date}</small>
          </h1>
          <div>
            <img src={'../../' + this.props.image} className="text-center img-responsive form-control "
                 style={{height: 500}}/>
          </div>
          <h3>简介</h3>
          <textarea readOnly value={this.props.description} className="form-control"> </textarea>
        </div>
    );
  }
}

var mapStateToProps = (state)=> {
  return {
    name: state.menuItem.name,
    image: state.menuItem.image,
    date: state.menuItem.date,
    description: state.menuItem.description,
    materials: state.menuItem.materials,
    steps: state.menuItem.steps
  };
};


var NameAndImagePackage = connect(mapStateToProps)(NameAndImage);

export default  NameAndImagePackage;