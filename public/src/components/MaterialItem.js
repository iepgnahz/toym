//因为一个表格有好多行：1对多
//所以每一行        组件
import React ,{Component} from 'react';

class MaterialItem extends Component{
  render(){
    let {source,amount}= this.props;
    return (
          <tr>
            <td>{source}</td>
            <td>{amount}</td>
          </tr>
    )
  }
}
export default MaterialItem;