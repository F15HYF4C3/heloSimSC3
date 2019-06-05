import React from 'react';
import './Nav.css';
import  routes from '../../routes.js';

const Nav = (props) =>{
    const navMenu = props.routes.map((e, i)=>{
        return <div key={e[i]}>
            

        </div>
    })
    return (
        <div>
            <section>{navMenu}</section>
            <h1>You are on page {this.props.location.pathname}</h1>
        </div>
    )
}
export default Nav