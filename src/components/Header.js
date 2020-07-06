import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

const Header = () =>(
    <div className="header_nav">
        <NavLink activeClassName="active-menu" className="what" to='/'   exact  >Home</NavLink>
        <NavLink activeClassName="active-menu" className="what" to='/help' >Help</NavLink>
        <NavLink activeClassName="active-menu" className="what" to='login'>Login</NavLink>
        <NavLink activeClassName="active-menu" className="what" to='signup'>Signup</NavLink>
        <NavLink activeClassName="active-menu" className="what"to='/admin/dashboard'>Admin</NavLink>
    </div>
)

export default connect()(Header)