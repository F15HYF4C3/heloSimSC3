import React, {Component} from 'react';
// import axios from 'axios';
// import { createStore, compose } from 'redux';
// import { Provider } from 'react-redux';
// import reducers from './ducks/reducer.js';
import { withRouter } from 'react-router-dom';
import './App.css';
import routes from './routes'
import Nav from './Component/Nav/Nav';

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
    if(path.startsWith("/dashboard" ) || path.startsWith("/post") || path.startsWith("/new")){
      nav = <Nav/>
    } else {
      nav = null
    }
    return (
      <div className="App">
        {nav}
        {routes}
      </div>
    );
  }
}

export default withRouter(App);