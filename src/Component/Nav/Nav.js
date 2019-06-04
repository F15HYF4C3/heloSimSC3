import React from 'react';
import './Nav.css';
import '../../routes.js'

const Nav = (props) =>{
    const navMenu = props.navMen.map((e, i)=>{
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