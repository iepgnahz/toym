'use strict';
import React from 'react';
import MaterialItem from './MaterialItem';
import {connect} from 'react-redux';

class Materials extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let materials = this.props.materials || [];
    return (
        <div style={{marginTop: '20px'}}>
          <h3>菜品用量</h3>
          <table className="table table-striped table-bordered">
            <thead>
            <tr>
              <th>材料</th>
              <th>用量</th>
            </tr>
            </thead>
            <tbody>
            {materials.map((v, k)=> (

                <MaterialItem key={k} source={v.source} amount={v.amount}/>))
            }
            </tbody>
          </table>

        </div>


    );
  }
}


// export default Materials
// var mapStateToProps = (state)=>{
//   return {
//     name:state.menuItem.name,
//     image:state.menuItem.image,
//     date:state.menuItem.date,
//     description:state.menuItem.description
//   }
// };


// var NameAndImagePackage = connect(mapStateToProps)(NameAndImage);

// export default  NameAndImagePackage;
var mapStateToProps = (state)=> {
  return {materials: state.menuItem.materials};
};
var MaterialsPackage = connect(mapStateToProps)(Materials);
export default MaterialsPackage;