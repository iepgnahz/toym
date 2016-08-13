import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import { connect } from 'react-redux';

class ResultList extends Component {
  render() {
    let {result, deleteTodo} = this.props;
    
    return (
        <div className="col-sm-8 col-sm-offset-2">
          <table className="table table-striped">
            <thead>
            <tr>
              <th>#</th>
              <th>Text</th>
              <th>Delete</th>
            </tr>
            </thead>
            <tbody>
            {
              result.map((v, k)=> {
                return (
                    <tr key={v._id}>
                      <td>{k + 1}</td>
                      <td>{v.text}</td>
                      <td><a
                          href="javascript: void(0)"
                          onClick={()=> {
                            deleteTodo(v._id);
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
  deleteTodo: (id)=> {
    dispatch({
      type: 'DELETE_TODO',
      id
    });
  }
});

const ResultListClz = connect(
    mapStateToProps,
    mapDispatchToProps
)(ResultList);

export default ResultListClz;