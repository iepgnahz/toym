import React, {Component} from 'react';// eslint-disable-line no-unused-vars
class MenuItem extends Component {
  render() {
    let {name, image} = this.props;
    return (
        <div className="food-body">
          <div className="text-center col-sm-6 col-md-4">
            <div className="thumbnail">
              <a href="#" className="text-center ">
                <img src={image} alt="..."  style={{height:'180px'}}/>
              </a>
              <div className="caption">
                <h3>{name}</h3>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default MenuItem;