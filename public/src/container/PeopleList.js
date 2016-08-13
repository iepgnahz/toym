/**
 * Created by jae on 16-8-13.
 */
import { connect } from 'react-redux';
import People from '../components/People';

// const mapStateToProps = state => state;

// const mapStateToProps = (state)=> (state);//所有state；
// const mapStateToProps = (state)=> ({
//   people:state.people
// });
// 包括筛选
const mapStateToProps = (state) =>{
  return state;
};
//
// [].map(item => item);
// [].map(item=> item.age);

//只有state
//左state代表 传入mapStateToProps的参数（一个对象）
//右state代表 作为新的结果的运算
//props原封不懂的去拿state

// const mapDispatchToProps = (dispatch)=> ({
//   addTodo: (text)=> {
//     dispatch(addTodo(text));
//   }
// });
// property
// state 的集合，包含所有component的state
const PeopleList = connect(mapStateToProps)(People);

export default PeopleList;
