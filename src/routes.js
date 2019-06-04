import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Auth from './Component/Auth/Auth.js';
import Dashboard from './Component/Dashboard/Dashboard.js';
import Form from './Component/Form/Form.js';
import Post from './Component/Post/Post.js';

class routes extends Component {

    render(){
        return (
            
            <Switch>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/post/:postid" component={Post} />
            <Route path="/new" component={Form} />
            <Route path="/" component={Auth} />
          </Switch>



        )
    }



}
export default routes