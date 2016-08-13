import { connect } from 'react-redux';
import AddTodoInput from '../components/AddTodoInput';
import { addTodo } from '../actions';

const mapStateToProps = (state)=> (state);
const mapDispatchToProps = (dispatch)=> ({
  addTodo: (text)=> {
    dispatch(addTodo(text));
  }
});

const AddTodo = connect(mapStateToProps, mapDispatchToProps)(AddTodoInput);

export default AddTodo;
