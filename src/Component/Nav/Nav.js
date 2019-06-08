import React, {Component} from 'react';
import './Nav.css';



class Nav extends Component {
   
  
    render() {
  //     const { location } = this.props.
  //    let menu;
  // if(this.props.location.pathname !== "/"){
  //   menu = <Nav/>
  // } else {
  //   nav = null
  // }
  // console.log(this.props.location.pathname !== "/")
  
      return (
        <div className="navMen">Nav
        <button >Home</button>
        <button variant="outline-dark">New Post</button>
        <button variant="outline-dark">Logout</button>
        </div>
      )
    }
  }
  
  // export default withRouter(Child)

export default Nav