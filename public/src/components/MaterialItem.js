/**
 * Created by zhangpei on 16/8/17.
 */
'use strict';
import React from 'react';

class MaterialItem extends React.Component {
  render() {
    let {source} = this.props;
    let {amount} = this.props;

    return (

        <tr>
          <td> {source} </td>
          <td> {amount} </td>
        </tr>


    );
  }
}
export default MaterialItem;
