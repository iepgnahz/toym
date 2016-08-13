/**
 * Created by jae on 16-8-13.
 */
import React, {Component} from 'react';// eslint-disable-line no-unused-vars
import PersonItem from './PersonItem';

class People extends Component {
  render() {
    
    let people=this.props.people;
    //let {people}=this.props;
    
    return (
        <div className="row">
          {
            people.map((v, k)=> (
                <PersonItem key={k} name={v.name} image={v.image}/>
            ))
          }
        </div>

    );
  }
}

export default People;