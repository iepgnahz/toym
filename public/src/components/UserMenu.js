import React ,{Component} from 'react';
import {connect} from 'react-redux'
import {getUserWorks} from '../actions/index'
import UserMenuItem from './UserMenuItem';
class UserMenu extends Component {
  componentDidMount() {
    console.log('aaa')
    this.props.getUserWorks(this.props.userId);
  }
  render() {
    let userMenu = this.props.selfWorksGetted || [];
    return (
        <div className="row">
          {
            userMenu.map((v, k)=> (
                <UserMenuItem id={v._id} key={k} name={v.name} image={v.image} date={v.date} description={v.description}
                          />
            ))
          }
        </div>

    );
  }
}


const mapStateToProps = (state)=> (state);
const mapDispatchToProps = (dispatch)=> ({
  getUserWorks: (userId)=> {
    dispatch(getUserWorks(userId));
  }
});

var UserMenuPackage = connect(mapStateToProps,mapDispatchToProps)(UserMenu);


export default UserMenuPackage;