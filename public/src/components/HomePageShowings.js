import React, {Component} from 'react';
import HomePageItem from './HomePageItem';
import Logo from './Logo';
import SliderPicture from './SliderPicture';
class HomePageShowings extends Component {

  componentDidMount() {
    this.props.init_HomePage();
  }

  render() {
    let homePage = this.props.homePage;
    return (
        <div>
          <SliderPicture/>
          <div className="text-center">
            <h4>小饼如嚼月
              < img src="../../image/icon.jpg" className="img-circle"  style={{width:'180px',height:'100px'}}/>
              中有酥和饴
            </h4>
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
    )
  }
}
export default HomePageShowings;