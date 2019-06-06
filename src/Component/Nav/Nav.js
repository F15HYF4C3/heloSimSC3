import React, {Component} from 'react';
import './Nav.css';


class Nav extends Component {
   
  
    render() {
      const { location } = this.props
  
      return (
        <div className="navMen">Nav
        <button>Home</button>
        <button>NewPost</button>
        <button>Logout</button>
        </div>
      )
    }
  }
  
  // export default withRouter(Child)

export default Nav