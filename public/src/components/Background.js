/**
 * Created by zhangpei on 16/8/22.
 */
import React, {Component} from 'react';// eslint-disable-line no-unused-vars
import {connect} from 'react-redux';
class Background extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
    {this.props.children}
    </div>
    )
  }
}

export default Background