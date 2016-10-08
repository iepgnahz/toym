import React, {Component} from 'react';
import MenuItem from './MenuItem';
import {connect} from 'react-redux';
class Menus extends Component{
  render(){
    let menus = this.props.menus;
    return(
        <div className="container">
          <div className="row">
            {
                menus.map((v,k)=>{
                  return <MenuItem id={v._id}  name={v.name} image={v.image} date={v.date} description={v.description}/>
                })
            }
          </div>
        </div>
    )
  }
}
const mapStateToProps = (state) =>(state);//把所有state返回
const MenuPackage = connect(mapStateToProps)(Menus);

export default MenuPackage;
