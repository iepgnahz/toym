import React, {Component} from 'react';// eslint-disable-line no-unused-vars
class PersonItem extends Component {
  render() {
    let {name, image} = this.props;
    return (

        <div className="text-center col-sm-6 col-md-3">
          <div className="thumbnail">
            <a href="#" className="text-center ">
              <img src={image} alt="..."/>
            </a>
            <div className="caption">
              <h3>{name}</h3>
            </div>
          </div>
        </div>
    )
  }
}

export default PersonItem;