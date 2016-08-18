import React, {Component} from 'react'; // eslint-disable-line no-unused-vars
import {connect} from 'react-redux';

class MaterialList extends Component {
  render() {
    let deleteMaterial = this.props.deleteMaterial;
    let result = this.props.result || [];
    console.log(result);

    return (
        <div className="col-sm-8 col-sm-offset-2">
          <table className="table table-bordered">
            <thead>
            <tr>
              <th>编号</th>
              <th>用料名称</th>
              <th>数量</th>
              <th>Delete</th>
            </tr>
            </thead>
            <tbody>
            {
              result.map((v, k)=> {
                return (
                    <tr >
                      <td>{k + 1}</td>
                      <td>{v.source}</td>
                      <td>{v.amount}</td>
                      <td><a
                          href="javascript: void(0)"
                          onClick={()=> {
                            deleteMaterial(k);
                          }}
                      >
                        删除
                      </a></td>
                    </tr>
                );
              })
            }
            </tbody>
          </table>
        </div>

    );
  }
}

const mapStateToProps = (state)=> ({
  result: state.result
});

const mapDispatchToProps = (dispatch)=> ({
  deleteMaterial: (id)=> {
    dispatch({
      type: 'DELETE_MATERIAL',
      id
    });
  }
});

const MaterialListPackage = connect(
    mapStateToProps,
    mapDispatchToProps
)(MaterialList);

export default MaterialListPackage;
