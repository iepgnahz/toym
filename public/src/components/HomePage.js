import React ,{Component} from 'react';
import SliderPicture from './SliderPicture';
import RecentMenuListPackage from './RecentMenuList';

class HomePage extends Component{
  render(){
    return (
       <div >
         <SliderPicture/>
         <div id='slogan' className="text-center">
           <h3 >鲜香四溢
                <span style={{margin: '0 12%'}}><img src="../../image/icon.jpg" className="img-circle"
                                                     style={{width: '180px', height: '100px'}}/>
              </span>垂涎三尺
           </h3>
         </div>
         <RecentMenuListPackage/>
       </div>
    )
  }
}

export default HomePage;