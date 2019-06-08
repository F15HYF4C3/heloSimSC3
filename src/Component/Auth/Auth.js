import React, {Component} from 'react';
import './Auth.css';
import axios from 'axios';
import {connect} from 'react-redux';
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
            username: this.setState.username,
            user_password: this.setState.user_password
        }
        axios.post('/api/login', credentials)
        .then((authorize)=>{
            if(authorize.data.success){
                this.props.dispatch({
                    type: 'users',
                    payload: authorize.data.users
                })
                this.props.history.push('/dashboard');
            }else{
                alert('Failed Login Attempt')
            }
        })
    }
    
    register = (event) =>{
        event.preventDefault();
        const newUser = {
            username: this.setState.username,
            user_password: this.setState.user_password
        }
        axios.post('/api/register', newUser)
        .then((newVisit)=>{
            if(newVisit.data.success){
                this.props.dispatch({
                    type: 'users',
                    payload: newVisit.data.users
                })
                this.props.history.push('/dashboard');
            }else{
                alert('This user already exists, please proceed to login page.')
            }
        })
    }

        
    

    handleChange = (e) => {
      
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        console.log("Auth Loaded")
    return ( 
    
<div className="login">
{/* <form onSubmit={this.login}> */}
<h1>Auth</h1>
<div className="login-box">Helo

<input type="text" placeholder="Username" name="Username" onChange={this.handleChange} value={this.setState.username} />

<input type="text" placeholder="Password" name="Password" onChange={this.handleChange} value={this.setState.user_password} />

<div className="buttons">
<button type="submit" onClick={this.login}>Login</button>
<button type="submit" onClick={this.register} >Register</button>
</div>
</div>
{/* </form> */}
</div>


    )
}
}

// export default Auth
export default  connect(state => state)(Auth)