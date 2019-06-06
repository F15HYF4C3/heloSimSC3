import React, {Component} from 'react';
import axios from 'axios';
import {Switch, Route, withRouter } from 'react-router-dom';
// import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Nav from './Component/Nav/Nav';
import Auth from './Component/Auth/Auth';
import Dashboard from './Component/Dashboard/Dashboard';
import Form from './Component/Form/Form';
import Post from './Component/Post/Post';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      navMen: [
        {
          id: 1,
          email: "",
          full_name: "",
          username: "",
          user_password: ""
        },
        {
          id:2,
          email: "",
          full_name: "",
          username: "",
          user_password: ""
        }
      ]

    }
  }

  
  componentDidMount(){
    // axios.get('/api/ping')
      // .then((res)=>{
      //   console.log(res.data)
      // })
   }

render() {
  console.log(this.props)

  let nav 
  if(this.props.location.pathname !== "/"){
    nav = <Nav/>
  } else {
    nav = null
  }
  console.log(this.props.location.pathname !== "/")

  return (
  
    <div className="App">
      
      
        {/* <Auth/> */}
    {nav}
    <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/post/:postid" component={Post} />
        <Route path="/new" component={Form} />
        <Route path="/" component={Auth} />
    </Switch>
      
    </div>
    
  );
}
}

export default withRouter(App);
