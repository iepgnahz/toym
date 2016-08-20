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
import {withRouter} from 'react-router';
class MenuUpLoadApp extends Component{
  constructor(props){
    super(props);
  }

  componentWillUpdate(nextProps) {

    if(nextProps.resultJump) {
      this.props.router.push('/menu');
    }
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
        <div className="text-center container">
          <Logo />
          <div className="food-body">
          <h3><b>菜名: <input type="text"  ref="nameInput" /></b></h3>
          <MenuImagePackage />
          <div style={{margin:'30px auto 50px'}}>
            <h4 className="text-left"><b>简介</b></h4>
            <textarea className="form-control" rows="2"  style={{overflow: 'auto'}} ref="descriptionInput"
                      placeholder="简单介绍一下你的作品吧.....">
          </textarea>
          </div>
          <AddMaterialInputPackage />
          <MaterialListPackage />
          <div>
            <h4 className="text-left"><b>做法与步骤</b></h4>
            <textarea className="form-control" rows="5"  style={{overflow: 'auto'}} ref="stepsInput"
                      placeholder="为了您的菜谱更好的呈现，您可以:1. xxx 回车 2. xxx 回车 3. xxx .....">
          </textarea>
          </div>
          <button type="button" className="btn btn-info btn-lg" onClick={this. click.bind(this)} style={{marginTop:'30px'}}>上传菜谱</button>
        </div>
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

var MenuUpLoadAppPackage = connect(mapStateToProps,mapDispatchToProps)(withRouter(MenuUpLoadApp));


export default MenuUpLoadAppPackage;