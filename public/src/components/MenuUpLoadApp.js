/**
 * Created by zhangpei on 16/8/18.
 */
import React, {Component} from 'react';// eslint-disable-line no-unused-vars
import {connect} from 'react-redux';
import Logo from '../components/Logo';
import {uploadMenu} from '../actions/index';
import  AddMaterialInputPackage from '../container/AddMaterialInputPackage';
import  MaterialListPackage from './MaterialList';
import  MenuImagePackage from '../components/MenuImage';
class MenuUpLoadApp extends Component{
  constructor(props){
    super(props);
  }

  click(){
    let name = this.refs.nameInput.value;
    let description = this.refs.descriptionInput.value;
    let steps = this.refs.stepsInput.value;
    let materials= this.props.materialUploaded;
    let newDate = new Date();
    let date = `${newDate.getFullYear()}-${newDate.getMonth()+1}-${newDate.getDate()}`;
    let image = this.props.loadImage;
    let menuItem = {name:name,image:image.file,description:description,steps:steps,materials:materials,date:date};

    this.props.uploadMenuItem(menuItem);

  }
  render(){
    return (
        <div style={{width:'80%',margin:'10px auto',textAlign:'center'}} className="container">
          <Logo />
          <input type="text"  ref="nameInput"   />
          <MenuImagePackage />
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
  uploadMenuItem: (data)=> {
    dispatch(uploadMenu(data));
  }
});

var MenuUpLoadAppPackage = connect(mapStateToProps,mapDispatchToProps)(MenuUpLoadApp);


export default MenuUpLoadAppPackage;