'use strict';
import React from 'react';
class Footer extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="food-body text-center" style={{margin:'50px auto',verticalAlign:'bottom',borderBottom:'1px solid #adadad'}}>
        <p>Copyright &copy;2016 烹然心动PRXD.com 版权所有  |  消费者维权热线：4000600773</p>
      </div>
    );
  }
}
export default Footer;