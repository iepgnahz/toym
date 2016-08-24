import  React from 'react';
import {Link} from 'react-router';
class HomePageItem extends React.Component{
  render(){
    let {id,name,date,description,image}=this.props;
    return (
        <div>
          <div className="text-center col-sm-6 col-md-4">
            <div  className="thumbnail">
              <Link to={'/menuDetail/' + id} className="text-center " >
                <img id="imageshow" src={image} alt="..." style={{height: '180px'}}/>
              </Link>
              <div className="caption row">
                <div className="col-md-6" id="name1">{name}</div>
                <div className="col-md-6" id="date1">{date}</div>
              </div>
              <p id="food-description">{description}</p>
            </div>
          </div>
        </div>
    );
  }
}
export default HomePageItem;