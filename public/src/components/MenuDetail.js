/**
 * Created by zhangpei on 16/8/16.
 */
import React, {Component} from 'react';// eslint-disable-line no-unused-vars
import NameAndImagePackage from '../components/NameAndImage';
import MaterialsPackage from '../components/Materials';
import  StepsPackage from '../components/Steps';
class MenuDetail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="food-body">
          <NameAndImagePackage />
          <MaterialsPackage />
          <StepsPackage />
        </div>
    );
  }
}

export default MenuDetail;