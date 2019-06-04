import React, {Component} from 'react';
import axios from 'axios';
import { HashRouter as Router, Switch } from 'react-router-dom';
// import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import routes from './routes.js'
import './App.css';
import Nav from './Component/Nav/Nav';
// import Auth from './Component/Auth/Auth';
// import Dashboard from './Component/Dashboard/Dashboard';
// import Form from './Component/Form/Form';
// import Post from './Component/Post/Post';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      navMen: [routes]

    }
  }
  componentDidMount(){
    axios.get('/api/ping')
      .then((res)=>{
        console.log(res.data)
      })
   }

render() {
  return (
    
    <div className="App">
      <Router>
        <Nav/>
        <routes/>
        <Switch>
          
        </Switch>
      </Router>
    </div>
    
  );
}
}

export default App;
