/**
 * Created by zhangpei on 16/8/18.
 */
import React, {Component} from 'react';// eslint-disable-line no-unused-vars
import {connect} from 'react-redux';
import Logo from '../components/Logo';
import  AddMaterialInputPackage from '../container/AddMaterialInputPackage';
import  MaterialListPackage from './MaterialList';
class MenuUpLoadApp extends Component{
  constructor(props){
    super(props);
  }

  //
  render(){
    return (
        <div style={{width:'80%',margin:'10px auto',textAlign:'center'}} className="container">
          <Logo />
          <div>
            <h4 className="text-left">简介</h4>
            <textarea className="form-control" rows="2"  style={{overflow: 'auto'}} ref="descriptionInput"
                      placeholder="简介">
          </textarea>
          </div>

          <AddMaterialInputPackage />
          <MaterialListPackage />
          <div>
            <h4 className="text-left">做法与步骤</h4>
            <textarea className="form-control" rows="5"  style={{overflow: 'auto'}} ref="stepsInput"
                      placeholder="为了您的菜谱更好的呈现，您可以:1. xxx 回车 2. xxx 回车 3. xxx .....">
          </textarea>
          </div>
          <button type="button" className="btn btn-info btn-sm" onClick={this. click.bind(this)}>上传菜谱</button>
        </div>
    );
  }
}
const mapStateToProps = (state)=> (state);
const mapDispatchToProps = (dispatch)=> ({

});

var MenuUpLoadAppPackage = connect(mapStateToProps,mapDispatchToProps)(MenuUpLoadApp);


export default MenuUpLoadAppPackage;