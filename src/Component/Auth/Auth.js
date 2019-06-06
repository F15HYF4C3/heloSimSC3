import React, {Component} from 'react';
import './Auth.css';
import axios from 'axios';
// import App from '../App';

class Auth extends Component {
    constructor(){
        super();
        this.state = {
            username:'',
            user_password:''
        }
    }

    login = (event) =>{
        event.preventDefault();
        const credentials = {
            username: this.state.username,
            user_password: this.state.user_password
        }
        axios.post('/api/auth', credentials)
        .then((authorize)=>{
            if(authorize.data.success){
                this.props.dispatch({
                    type: 'user',
                    payload: authorize.data.user
                })
                this.props.history.PushManager('/home');
            }else{
                alert('Failed Login Attempt')
            }
        })
    }
    render(){
    return (

           
<div className="login">
<h1>Auth</h1>
<div className="login-box">Helo
<input type="text" placeholder="Username" name="Username" />
<input type="text" placeholder="Password" name="Password" />
<button type="submit">Login</button>
<button type="submit">Register</button>
</div>
</div>


    )
}
}
export default Auth