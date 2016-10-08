import React,{Component} from 'react';

class Footer extends Component{
  render(){
    return (
        <footer id="footer">
          <div className="container">
            <div className="col-md-5 col-md-offset-3">
              <span>Copyright © 2016.Company name All rights reserved.烹然心动</span>
            </div>
            <div id="gotop">
              <img src="image/toTop.png"/>
            </div>
            <div className="clearfix"></div>
          </div>
        </footer>
    )
  }
}

export default Footer;