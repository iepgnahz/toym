import React, {Component} from 'react';// eslint-disable-line no-unused-vars
import {Link} from 'react-router';
class MenuItem extends Component {
  constructor(props) {
    super(props);
  }

  click() {
    this.props.getId(this.props.key);
  }

  render() {
    let {name, image, date, description, id} = this.props;

    return (
        <div className="food-body">
          <div className="text-center col-sm-6 col-md-4">
            <div className="thumbnail">
              <Link to={'/menuDetail/' + id} className="text-center " onClick={this.click.bind(this)}>
                <img src={image} alt="..." style={{height: '180px'}}/>
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


export default MenuItem;
