import React, {Component} from 'react';
import {connect} from 'react-redux';
import MaterialItem from './MaterialItem';

class MaterialList extends Component {
  render() {
    let materials = this.props.materials || [];
    return (
        <div style={{marginTop: '20px'}}>
          <h3>菜品用量</h3>
          <table className="table table-striped table-bordered">
            <thead>
            <tr>
              <th>材料</th>
              <th>数量</th>
            </tr>
            </thead>
            <tbody>
            {
              materials.map((v, k)=> {
                return <MaterialItem source={v.source} amount={v.amount}/>
              })
            }
            </tbody>
          </table>
        </div>
    )
  }
}

const mapStateToProps = (state)=> {
  return state.menudetails;
};

const MaterialListPackage = connect(mapStateToProps)(MaterialList);
export default MaterialListPackage;