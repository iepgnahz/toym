import React, {Component} from 'react';// eslint-disable-line no-unused-vars
import request from 'superagent';
import {connect} from 'react-redux';
import {fetchImage} from '../actions';
class MenuImage extends Component {

  handleClick(file) {
    let formData = new FormData();
    formData.append('avatar', file);
    request.post('/profile')
        .send(formData)
        .end((err, res)=> {
          this.props.fetchImage(res.body.filePath);
        });
  }

  isClick() {
    let input = this.refs.file;
    let image = this.refs.image;
    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        image.src = e.target.result;
      };

      reader.readAsDataURL(input.files[0]);
    }
    this.handleClick(input.files[0]);
  }
  render() {
    return (
        <div id="wrap" style={{align:'center'}}>
          <div>
            <img src="" ref="image" id='img1' style={{height:'200px',width:'300px'}}/>
          </div>
          <br/>
          <br/>
          <input type="file" ref="file" style={{width:'106px'}} onChange={this.isClick.bind(this)}/>
        </div>
    );
  }
}

const mapStateToProps=(state)=>(state);
const mapDispatchToProps=(dispatch)=>({
  fetchImage: (file)=>{
    dispatch(fetchImage(file));
  }
});
const MenuImagePackage=connect(mapStateToProps,mapDispatchToProps)(MenuImage);
export default MenuImagePackage;
