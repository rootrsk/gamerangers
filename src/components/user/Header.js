import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

const Header = (props) =>(
    <div className="header_nav">
        <NavLink activeClassName="active-menu" className="what"to='/'exact ><span />Home</NavLink>
        <NavLink activeClassName="active-menu" className="what" to='/user/dashboard'><span />Dashboard</NavLink>
        <NavLink activeClassName="active-menu" className="what" to='/user/matches' ><span />Matches</NavLink>
        <NavLink activeClassName="active-menu" className="what" to='/user/profile' ><span />Profile</NavLink>
        <NavLink activeClassName="active-menu" className="what" to='/user/logout' ><span />Logout</NavLink>
        <NavLink activeClassName="active-menu" className="what" to='/help'><span />Help</NavLink>
    </div>
)
const stateToProps = (state) =>{
    return({
        user:state.user
    })
}
export default connect(stateToProps)(Header) 