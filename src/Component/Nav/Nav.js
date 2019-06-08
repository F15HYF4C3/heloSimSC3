import React, {Component} from 'react';
import './Nav.css';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';




class Nav extends Component {
  //  constructor(){
  //    super();
  //    this.state = {
  //      location: ""
  //    }
  // }

  logout = () =>{
    this.props.history.push("/")
  }
    render() {
 
  // console.log(this.props.location.pathname !== "/"
      
    
  
      return (
        <div className="navMen">
          Logged in as: {this.props.users.full_name}
      <Link to="/dashboard">
      <button>Home</button>
      </Link>
      <Link to="/new">
      <button>New Post</button>
      </Link>
      
      <button onClick={this.logout}>Logout</button>
      
        
        
        
        </div>
      )
    }
  }
  
  // export default withRouter()

export default connect((state) =>{
return state;
})(withRouter(Nav));