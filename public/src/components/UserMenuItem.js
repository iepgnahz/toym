/**
 * Created by zhangpei on 16/8/23.
 */
import React, {Component} from 'react';// eslint-disable-line no-unused-vars
import {Link} from 'react-router';
class UserMenuItem extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    let {name, image, date, description, id} = this.props;

    return (
        <div >
          <div className="text-center col-sm-6 col-md-4">
            <div className="thumbnail">
              <Link to={'/menuDetail/' + id} className="text-center " >
                <img src={'/'+image} alt="..." style={{height: '180px'}}/>
              </Link>
              <div className="caption row">
                <div className="col-md-6" id="name1">{name}</div>
                <div className="col-md-6" id="date1">{date}</div>
              </div>
              <p id="food-description">{description}</p>
            </div>
          </div>
        </div>
    );
  }
}


export default UserMenuItem;
