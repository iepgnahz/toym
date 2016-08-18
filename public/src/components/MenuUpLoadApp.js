/**
 * Created by zhangpei on 16/8/18.
 */
import React, {Component} from 'react';
import Logo from '../components/Logo';
import  AddMaterialInputPackage from '../container/AddMaterialInputPackage';
import  MaterialListPackage from './MaterialList';
class MenuUpLoadApp extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
        <div className="container">
          <Logo />
          <AddMaterialInputPackage />
          <MaterialListPackage />
        </div>
    )
  }
}

export default MenuUpLoadApp;