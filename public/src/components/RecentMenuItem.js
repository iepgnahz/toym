import React, {Component} from 'react';
import {Link} from 'react-router';

class RecentMenuItem extends Component {
  render() {
    let {id, name, date, description, image}=this.props;
    return (
        <div className="text-center col-sm-6 col-md-4">
          <div className="thumbnail">
            <Link to={'/menuDetail/'+id}>
              <img id="food-img" src={image} alt="..."/>
            </Link>
            <div className="caption row">
              <div className="col-md-6" id="food-name">{name}</div>
              <div className="col-md-6" id="food-date">{date}</div>
            </div>
            <p id="food-description">{description}</p>
          </div>
        </div>
    )
  }
}

export default RecentMenuItem;