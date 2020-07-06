import React from 'react'
import { NavLink } from 'react-router-dom'



const Header = () =>{
    return(
        <div>
            <NavLink activeClassName="active-menu" className="what" to='/'  exact>Home</NavLink>
            <NavLink activeClassName="active-menu" className="what" to='/admin/dashboard'>Dashboard</NavLink>
            <NavLink activeClassName="active-menu" className="what" to='/help'>Help</NavLink>
            <NavLink activeClassName="active-menu" className="what" to='/admin/profile' >Profile</NavLink>
            <NavLink activeClassName="active-menu" className="what" to='/admin/match-create'>CreateMatch</NavLink>
            <NavLink activeClassName="active-menu" className="what" to='/admin/matches'>Matches</NavLink>
            <NavLink activeClassName="active-menu" className="what" to='/admin/logout'>Logout</NavLink>
        </div>
    )
}

export default  Header