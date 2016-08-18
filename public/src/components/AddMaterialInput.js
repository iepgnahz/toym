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
        <form action="#" className="form-horizontal col-sm-8 col-sm-offset-2">
          <div>
            <label htmlFor="inputEmail3" className="control-label"><h3>用料 <span id="display-message">必填</span></h3></label>
          </div>
          <div className="form-group">
            <div className="col-sm-10">

              <input type="text"
                     className="material-input"
                     id="inputSource"
                     placeholder="用料名称"
                     ref="sourceText"
                     onKeyPress={this.handleKeyPress.bind(this)}
              />

              <input type="text"
                     className="material-input"
                     id="inputAmount"
                     placeholder="数量"
                     ref="amountText"
                     onKeyPress={this.handleKeyPress.bind(this)}
              />
              <button onClick={this.click.bind(this)} type="button" className="btn btn-default btn-sm">添加</button>

            </div>
          </div>

        </form>
    );
  }
}

export default AddMaterialInput;
