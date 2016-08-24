import React from 'react';
import HomePageItem from './HomePageItem';
import SliderPicture from './SliderPicture';
import {Link} from 'react-router';


class HomePageShowings extends React.Component {

  componentDidMount() {
    this.props.init_HomePage();
  }

  render() {
    let homePage = this.props.homePage;
    return (
        <div>

          <div className="food-body">
            <SliderPicture/>
            <div id='showword' className="text-center">
              <h3 >小饼如嚼月
                <span style={{margin: '0 12%'}}><img src="../../image/icon.jpg" className="img-circle"
                                                     style={{width: '180px', height: '100px'}}/>
              </span>中有酥和饴
              </h3>
            </div>
            <hr/>
            <div>
              <div className="row">
                <h4 className="col-sm-6 col-xs-6 text-left" id="test">菜谱新秀</h4>
                 <h5 style={{marginTop:'2%'}}><Link className="col-sm-6 col-xs-6 text-right" to="/menu">更多>></Link></h5>
              </div>
              <div className="row">
                {
                  homePage.map((v, k)=>(
                      <HomePageItem id={v._id} key={k} name={v.name} date={v.date} description={v.description}
                                    image={v.image}/>
                  ))
                }
              </div>
            </div>
          </div>

        </div>
    );
  }
}
export default HomePageShowings;