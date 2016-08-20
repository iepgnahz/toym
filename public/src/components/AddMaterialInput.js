import React, {Component} from 'react'; // eslint-disable-line no-unused-vars

class AddMaterialInput extends Component {

  click() {
    let val1 = this.refs.sourceText.value.trim();
    let val2 = this.refs.amountText.value.trim();
    if (val1 && val2) {
      this.props.addMaterial(val1, val2);
    }
    this.refs.sourceText.value = '';
    this.refs.amountText.value = '';
  }

  handleKeyPress(e) {
    if (13 !== e.charCode) {
      return;
    }
    this.click();
  }

  render() {
    return (
        <form action="#" className="form-horizontal">
          <div>
             <h4 className="text-left"><b>用料</b>
               <small className="text-danger">必填</small></h4>
          </div>
          <div className="form-group">
            <div className="text-left col-md-5 col-sm-5">
              <b>用料</b><input style={{marginLeft:'10px'}}
                     type="text"
                     className="material-input"
                     id="inputSource"
                     placeholder="用料名称"
                     ref="sourceText"
                     onKeyPress={this.handleKeyPress.bind(this)}
              />
              </div>
              <div className="col-md-5 clo-sm-5 text-left">
               <b>数量</b><input style={{marginLeft:'10px'}}
                     type="text"
                     className="material-input"
                     id="inputAmount"
                     placeholder="数量"
                     ref="amountText"
                     onKeyPress={this.handleKeyPress.bind(this)}
              />
              </div>
              <button style={{marginRight:'2%',float:'right'}} onClick={this.click.bind(this)} type="button" className="btn btn-md btn-primary">添加</button>


          </div>

        </form>
    );
  }
}

export default AddMaterialInput;
