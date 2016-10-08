import React, {Component} from 'react';
import {Link} from 'react-router';

class MenuItem extends Component {
  render() {
    let {name, image, date, description, id} = this.props;
    console.log(this.props.id);
    return (
        <div className="food-body">
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
        </div>
    )
  }
}

export default MenuItem;