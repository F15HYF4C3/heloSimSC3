import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Auth from './Component/Auth/Auth.js';
import Dashboard from './Component/Dashboard/Dashboard.js';
import Form from './Component/Form/Form.js';
import Post from './Component/Post/Post.js';
import Nav from './Component/Nav/Nav.js'


const Routes = (props)=>{
    const routes = props.navMen.map((e, i)=>{
        return <div key={e[i]}>
            

        </div>
    })


// class routes extends Component {
// constructor(props){
// super(props);
//     this.state = {
//         navMenu: [],
//         navMen: [
//         {
//             id: 1,
//             email: "",
//             full_name: "",
//             username: "",
//             user_password: ""
//             }
//             ]
//     }
// }

// render(){
        return (
<div className="routes">
<Nav display='inline' />
{routes}
    <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/post/:postid" component={Post} />
        <Route path="/new" component={Form} />
        <Route path="/" component={Auth} />
    </Switch>
</div>


        )
    
}
// }


export default {Switch, Routes}
