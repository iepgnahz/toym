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
        <div>
          <div>
            <img src="" ref="image" id='img1' style={{height:'400px',width:'600px'}}/>
          </div>
          <input type="file" ref="file" style={{width:'90px',margin:'10px 0 20px 45%'}} onChange={this.isClick.bind(this)}/>
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
