import React, {Component} from 'react';
// import axios from 'axios';
// import { createStore, compose } from 'redux';
// import { Provider } from 'react-redux';
// import reducers from './ducks/reducer.js';
import {BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom';
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
let path = this.props.location.pathname;
  let nav 
  if(path.startsWith("/dashboard" )
  || path.startsWith("/post")
  || path.startsWith("/new")){
    nav = <Nav/>
  }else{
    nav = null
  }
  console.log(this.props.location.pathname !== "/")

  return (
  
    <div className="App">
      
      
        {/* <Auth/> */}
    {nav}
    <Router>
      <Switch>
          <Route exact path="/" component={Auth} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/post/:postid" component={Post} />
          <Route path="/new" component={Form} />
          <Route path="/*" component={Auth} />
      </Switch>
    </Router>
      
    </div>
    
  );
}
}

export default withRouter(App);
