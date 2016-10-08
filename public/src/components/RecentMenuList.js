import React ,{Component} from 'react';
import {connect} from 'react-redux';
import RecentMenuItem from './RecentMenuItem';
class RecentMenuList extends Component{
  componentDidMount(){
    this.props.initRecentMenu();
  }
  render(){
    let recentMenuList = this.props.recentMenuList||[];
    return (
        <div className="food-body">
          <div >
            <div className="">菜谱新秀</div>
            <div className="">更多</div>
          </div>
          {
              recentMenuList.map((v,k)=>{
                return <RecentMenuItem id={v._id} name={v.name} date={v.date} description={v.description} image={v.image}/>
              })
          }
        </div>
    )
  }
}
const mapStateToProps = (state)=>{
  return {recentMenuList:state.recentMenuList};
};
const mapDispatchToProps = (dispatch)=>({
  initRecentMenu:()=>{
    dispatch({
      type:'INIT_RECENTMENU'
    })
  }
});
//注意：
//要给 RecentMenuList 组件connect 所需要的state
const RecentMenuListPackage = connect(mapStateToProps,mapDispatchToProps)(RecentMenuList);
export default RecentMenuListPackage;