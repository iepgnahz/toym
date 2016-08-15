import React, {Component} from 'react';// eslint-disable-line no-unused-vars
class MenuItem extends Component {
  render() {
    let {name, image,date,description} = this.props;
    return (
        <div className="food-body">
          <div className="text-center col-sm-6 col-md-4">
            <div className="thumbnail">
              <a href="#" className="text-center ">
                <img src={image} alt="..."  style={{height:'180px'}}/>
              </a>
              <div className="caption row">
                <div className="col-md-5 name1" >{name}</div>
                <div className="col-md-2"> </div>
                <div className="col-md-5" id="date1">{date}</div>
              </div>
                <p id="food-description">{description}</p>
            </div>
          </div>
        </div>
    )
  }
}

export default MenuItem;