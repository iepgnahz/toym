import React, {Component} from 'react';// eslint-disable-line no-unused-vars

class SliderPicture extends Component {
  constructor() {
    super();
    this.state = {
      imageIndex: 0
    };
    setInterval(this.next.bind(this), 3000);
  }

  prev() {
    let index = (this.state.imageIndex - 1) < 0 ? 4 : this.state.imageIndex - 1;
    this.setState({
      imageIndex: index
    });
  }

  next() {
    this.setState({
      imageIndex: (this.state.imageIndex + 1) % 5
    });
  }

  render() {
    let address = ['./../image/a.jpg', './../image/c.jpg', './../image/d.jpg','./../image/e.jpg','./../image/h.jpg'];
    return (
        <div id="slider">
            <button className="glyphicon glyphicon-menu-left" onClick={this.prev.bind(this) } id="btn_1"></button>
            <img id="picture-sliding" src={address[this.state.imageIndex]}/>
            <button  className="glyphicon glyphicon-menu-right" onClick={this.next.bind(this) } id="btn_2"></button>
        </div>

    );
  }
}


export default SliderPicture;