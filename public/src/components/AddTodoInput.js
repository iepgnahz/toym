import React, {Component} from 'react'; // eslint-disable-line no-unused-vars

class AddTodoInput extends Component {

  addTodo() {
    let val = this.refs.todoText.value.trim();
    if (val) {
      this.props.addTodo(val);
    }
    this.refs.todoText.value = '';
  }

  handleKeyPress(e) {
    if (13 !== e.charCode) {return;}
    this.addTodo();
  }

  render() {
    return (
        <form action="#" className="form-horizontal col-sm-8 col-sm-offset-2">
          <div className="form-group">
            <label htmlFor="inputEmail3" className="col-sm-2 control-label">Todo</label>
            <div className="col-sm-10">
              <input type="text"
                     className="form-control"
                     id="inputEmail3"
                     placeholder="Todo"
                     ref="todoText"
                     onKeyPress={this.handleKeyPress.bind(this)}
              />
            </div>
          </div>

          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button onClick={this.addTodo.bind(this)} type="button" className="btn btn-default">Add</button>
            </div>
          </div>
        </form>
    );
  }
}

export default AddTodoInput;